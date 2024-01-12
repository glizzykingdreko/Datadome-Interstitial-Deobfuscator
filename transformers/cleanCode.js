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
    // Base case: If the entire expression is a string literal
    if (t.isStringLiteral(expression)) {
        return expression.value;
    }
    // Recursive case: If the expression is a binary expression with '+' operator
    else if (t.isBinaryExpression(expression, { operator: '+' })) {
        const left = simplifyConcatenation(expression.left);
        const right = simplifyConcatenation(expression.right);
        // Concatenate only if both sides are strings
        if (left !== null && right !== null) {
            return left + right;
        }
    }
    // If neither case applies, return null
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

const improveStrings = (ast) => {
    traverse(ast, {
        MemberExpression(path) {
            // Check if property access is using bracket notation with a string literal
            if (path.node.computed && t.isStringLiteral(path.node.property)) {
                const property = path.node.property.value;
                // Replace with dot notation
                path.node.computed = false;
                path.node.property = t.identifier(property);
            }
            // Simplify binary expressions with string literals
            else if (path.node.property && t.isBinaryExpression(path.node.property)) {
                const simplifiedString = simplifyConcatenation(path.node.property);
                if (simplifiedString !== null) {
                    path.node.property = t.stringLiteral(simplifiedString);
                }
            }
        },
        BinaryExpression(path) {
            if (path.node.operator === '+') {
                const simplifiedString = simplifyConcatenation(path.node);
                if (simplifiedString !== null) {
                    // Replace the entire BinaryExpression with a StringLiteral
                    path.replaceWith(t.stringLiteral(simplifiedString));
                }
            }
        }
    });
}

module.exports = {
    extractDecodeList,
    sumBinaryExpressions,
    getDecodeArray,
    replaceUnusedFunction,
    improveStrings
}