const vm = require('vm');
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


let extractDecodeList = (ast, context, varName) => {
    traverse(ast, {
        VariableDeclaration(path) {
            if (
                path.node.declarations.length === 1 &&
                path.node.declarations[0].init &&
                path.node.declarations[0].init.type === 'ArrayExpression' &&
                path.node.declarations[0].id.name === varName
                
            ) {
    
                vm.runInContext(generate(path.node).code, context);
                path.remove();
                path.stop();
            }
        }
    });
}

let sumBinaryExpressions = (ast) => {
    traverse(ast, {
        MemberExpression(path) {
            if (t.isBinaryExpression(path.node.property, { operator: '+' })) {
                const simplifiedString = simplifyConcatenation(path.node.property);
                if (simplifiedString !== null) {
                    path.node.property = t.stringLiteral(simplifiedString);
                }
            }
        },
        AssignmentExpression(path) {
            if (t.isBinaryExpression(path.node.right, { operator: '+' })) {
                const simplifiedString = simplifyConcatenation(path.node.right);
                if (simplifiedString !== null) {
                    path.node.right = t.stringLiteral(simplifiedString);
                }
            }
        }
    });
}

function simplifyConcatenation(expression) {
    if (t.isStringLiteral(expression.left) && t.isStringLiteral(expression.right)) {
        return expression.left.value + expression.right.value;
    } else if (t.isBinaryExpression(expression.left, { operator: '+' })) {
        const left = simplifyConcatenation(expression.left);
        if (left !== null && t.isStringLiteral(expression.right)) {
            return left + expression.right.value;
        }
    } else if (t.isBinaryExpression(expression.right, { operator: '+' })) {
        const right = simplifyConcatenation(expression.right);
        if (right !== null && t.isStringLiteral(expression.left)) {
            return expression.left.value + right;
        }
    }
    return null;
}

const getDecodeArray = (ast, context) => {
    let varName;
    traverse(ast, {
        VariableDeclaration(path) {
            if (
                path.node.declarations.length === 1 &&
                path.node.declarations[0].init &&
                path.node.declarations[0].init.type === 'ArrayExpression'
                
            ) {
                varName = path.node.declarations[0].id.name;
                path.stop();
            }
        }
    });
    return varName;
}

const replaceUnusedFunction = (ast) => {
    const usedFunctions = new Set();

    // Step 1: Collect function usage data
    traverse(ast, {
        CallExpression(path) {
            if (t.isIdentifier(path.node.callee)) {
                usedFunctions.add(path.node.callee.name);
            }
        },
        MemberExpression(path) {
            // In case of object methods
            if (t.isIdentifier(path.node.property)) {
                usedFunctions.add(path.node.property.name);
            }
        },
        // Add more cases if needed, like NewExpression, etc.
    });
    
    // Step 2: Remove unused function declarations
    traverse(ast, {
        FunctionDeclaration(path) {
            if (!usedFunctions.has(path.node.id.name)) {
                path.remove();
            }
        },
        // You can also handle FunctionExpressions and ArrowFunctionExpressions
        // if they are assigned to a variable and that variable is never used.
    });
}

module.exports = {
    extractDecodeList,
    sumBinaryExpressions,
    getDecodeArray,
    replaceUnusedFunction
}