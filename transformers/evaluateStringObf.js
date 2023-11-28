
const vm = require('vm');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');


const evaluateFunctionsWithTwoParameters = (ast, context) => {
    let replacements = 0;
    for (let i = 0; i < 3; i++) {
        traverse(ast, {
            FunctionDeclaration(path) {
                if (
                    path.node.params.length === 2
                ) {
                    try {
                        const result = vm.runInContext(generate(path.node).code, context);
                        const functionName = path.node.id.name;
                        if (!context[functionName]) {
                            context[functionName] = result;
                        }
                    } catch (e) {
                    }
                }
            }
        })

        traverse(ast, {
            CallExpression(path) {
                if (
                    path.node.arguments.length === 2 &&
                    path.node.arguments[0].type === 'NumericLiteral' &&
                    path.node.arguments[1].type === 'NumericLiteral'
                ) {
                    try {
                        const result = vm.runInContext(generate(path.node).code, context);
                        path.replaceWithSourceString(result);
                        replacements++;
                    } catch (e) {
                    }
                }
            }
        })
    }
    return replacements;
}

const extractDecodeFunction = (ast, context) => {
    let replacements = 0;
    let matches = [];
    traverse(ast, {
        CallExpression(path) {
            if (
                path.node.arguments.length === 1 &&
                path.node.arguments[0].type === 'NumericLiteral'
            ) {
                let functionName = path.node.callee.name;
                matches.push(functionName);
            }
        },
        FunctionDeclaration(path) {
            if (
                path.node.params.length === 1
            ) {
                try {
                    const result = vm.runInContext(generate(path.node).code, context);
                    const functionName = path.node.id.name;
                    if (!context[functionName]) {
                        context[functionName] = result;
                    }
                } catch (e) {
                }
            }
        }
    })
    // Get the first function name
    let mostCommon = matches[0];

    traverse(ast, {
        CallExpression(path) {
            if (
                path.node.arguments.length === 1 &&
                path.node.arguments[0].type === 'NumericLiteral' &&
                path.node.callee.name === mostCommon
            ) {
                try {
                    const result = vm.runInContext(generate(path.node).code, context);
                    // Replace the call with the result, could be a string
                    path.replaceWithSourceString("'" + result + "'");
                    replacements++;
                } catch (e) {
                }
            }
        }
    })
    return replacements;
}

const extractSecondDecodeFunction = (ast, context) => {
    let replacements = 0;
    let matches = [];
    traverse(ast, {
        CallExpression(path) {
            if (
                path.node.arguments.length === 1 &&
                path.node.arguments[0].type === 'NumericLiteral'
            ) {
                let functionName = path.node.callee.name;
                matches.push(functionName);
            }
        },
        FunctionDeclaration(path) {
            if (
                path.node.params.length === 1
            ) {
                try {
                    const result = vm.runInContext(generate(path.node).code, context);
                    const functionName = path.node.id.name;
                    if (!context[functionName]) {
                        context[functionName] = result;
                    }
                } catch (e) {
                    console.log("Error extracting function")
                }
            }
        }
    })
    // Get the second function name
    let mostCommon = matches[0];

    // Replace all calls to the most common function with decode
    traverse(ast, {
        CallExpression(path) {
            if (
                path.node.arguments.length === 1 &&
                path.node.arguments[0].type === 'NumericLiteral' &&
                path.node.callee.name === mostCommon
            ) { 
                const result = vm.runInContext(generate(path.node).code, context);
                matches++;
                if (typeof result === 'number') {
                    path.replaceWith(t.numericLiteral(result));
                }
                else if (typeof result === 'string') {
                    path.replaceWith(t.stringLiteral(result));
                } else if (typeof result === 'boolean') {
                    path.replaceWith(t.booleanLiteral(result));
                } else if (result === null) {
                    path.replaceWith(t.nullLiteral())

                } else if (typeof result === 'object') {
                    path.replaceWith(t.objectExpression(result));
                }
            }
        }
    });    
}

module.exports = {
    evaluateFunctionsWithTwoParameters,
    extractDecodeFunction,
    extractSecondDecodeFunction
}