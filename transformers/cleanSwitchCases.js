const { default: generate } = require('@babel/generator');
const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');
const t = require('@babel/types');
const fs = require('fs');

function executeCase(caseNumber, casesData, switcher, isFunctionContext) {
    const currentData = casesData[caseNumber];
    if (!currentData) {
        return '';
    }

    let newCode = '';
    if (isFunctionContext) {
        // In a function context, keep return statements as is
        newCode = currentData.data.replace(/continue;/g, '') + '\n';
    } else {
        // Outside a function context, transform return statements
        newCode = currentData.data.replace(/return (.*);/g, 'returnValue = $1; break;').replace(/continue;/g, '') + '\n';
    }

    const nextNumber = currentData.nextNumber;
    if (nextNumber !== null && nextNumber !== caseNumber) {
        newCode += executeCase(nextNumber, casesData, switcher, isFunctionContext);
    }

    return newCode;
}

const cleanSwitchCases = (ast) => {
    let matches = 0;
    traverse(ast, {
        ForStatement(path) {
            if (
                (
                    t.isVariableDeclaration(path.node.init) ||
                    t.isAssignmentExpression(path.node.init)    
                )
                &&
                t.isBooleanLiteral(path.node.test)
            ) {
                const isFunctionContext = Boolean(path.getFunctionParent());
                    const switcher = path.node.body.body[0].discriminant.name;
                    const cases = path.node.body.body.find(node => t.isSwitchStatement(node)).cases;
                    let startingNumber = null;
                    if (path.node.init.declarations) {
                        path.node.init.declarations.forEach(decl => {
                            if (decl.id.name === switcher) {
                                startingNumber = decl.init.value;
                            }
                        });
                    } else {
                        startingNumber = path.node.init.right.value;
                    }

                    const casesData = {};
                    cases.forEach(caseNode => {
                        const { test: { value: caseNumber }, consequent } = caseNode;
                        const consequentsData = [];
                        let nextNumber = null;
                        consequent.forEach(conseqNode => {
                            // remove from each conseqNode any BreakContinueStatement
                            if (
                                t.isBreakStatement(conseqNode) || t.isContinueStatement(conseqNode) || t.isReturnStatement(conseqNode)
                            ) {
                                return;
                            } else if (
                                t.isIfStatement(conseqNode) && t.isReturnStatement(conseqNode.consequent)
                            ) {
                                // Handle the if-return pattern
                                let conditionCode = generate(conseqNode.test).code;
                                let returnCode = generate(conseqNode.consequent).code;
                                consequentsData.push(`if (${conditionCode}) ${returnCode.replace('return ', 'returnervar = ')}`); // ik is just a quick dumb way
                                return;
                            } else if (
                                t.isExpressionStatement(conseqNode) &&
                                t.isSequenceExpression(conseqNode.expression)
                            ) {
                                conseqNode.expression.expressions.forEach(expr => {
                                    if (t.isAssignmentExpression(expr)) {
                                        if (t.isIdentifier(expr.left)) {
                                            if (expr.left.name === switcher) {
                                                nextNumber = expr.right.value;
                                                // remove it 
                                                conseqNode.expression.expressions.splice(conseqNode.expression.expressions.indexOf(expr), 1);
                                            }
                                        }
                                    }
                                }
                                );
                            }

                            consequentsData.push(generate(conseqNode).code);
                        });

                        casesData[caseNumber] = {
                            data: consequentsData.join('\n'),
                            nextNumber: nextNumber
                        };
                    });
                    
                    const newCodeString = executeCase(String(startingNumber), casesData, switcher, isFunctionContext);

                    // Parse and replace the code
                    let parsedCode;
                    if (isFunctionContext) {
                        parsedCode = parser.parse(newCodeString).program.body;
                    } else {
                        // If not in a function, wrap in a block and declare returnValue
                        parsedCode = parser.parse(`{ let returnValue; ${newCodeString} }`).program.body;
                    }
                    path.replaceWithMultiple(parsedCode);
                    matches++;
            }
        },
        CallExpression(path) {
            if (
                t.isCallExpression(path.node.callee) &&
                t.isIdentifier(path.node.callee.callee) &&
                path.node.callee.arguments.length === 1 &&
                t.isFunctionExpression(path.node.callee.arguments[0])
            ) {
                let arguments = path.node.arguments.map(arg => generate(arg).code).join(', ');
                let newCode = `(
                    ${generate(path.node.callee.arguments[0]).code}
                )(${arguments})`;
                path.replaceWithSourceString(newCode);
                matches++;
            }
        }
    });

    return matches;
}

module.exports = cleanSwitchCases;