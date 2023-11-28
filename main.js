const fs = require('fs');
const parser = require('@babel/parser');
const vm = require('vm');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const {
    evaluateFunctionsWithTwoParameters,
    extractDecodeFunction,
    extractSecondDecodeFunction
} = require('./transformers/evaluateStringObf');
const {
    extractDecodeList,
    sumBinaryExpressions,
    getDecodeArray,
    replaceUnusedFunction
} = require('./transformers/cleanCode');

const context = {}

vm.createContext(context);

// Read the JS file
let inputFile = process.argv[2] || 'script.js';
const code = fs.readFileSync(inputFile, 'utf-8');

// Parse the code into an AST
const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
});
let matches;

console.log("<><><><><><><><>< Datadome Interstitial Deobfuscator ><><><><><><><><>")
const varName = getDecodeArray(ast);
console.log("> Extracted decode array name: " + varName);
matches = evaluateFunctionsWithTwoParameters(ast, context);
console.log(`> Replaced ${matches} function calls with their results`);
matches = extractDecodeFunction(ast, context);
console.log(`> Replaced ${matches} function calls with their results`);
extractDecodeList(ast, context, varName);
console.log("> Extracted decode array");
matches = extractSecondDecodeFunction(ast, context);
console.log(`> Replaced ${matches} function calls with their results`);
sumBinaryExpressions(ast);
console.log("> Simplified stringLiteral expressions");
replaceUnusedFunction(ast);
console.log("> Removed unused functions");

traverse(ast, {
    MemberExpression(path) {
        // Check if property access is using bracket notation with a string literal
        if (path.node.computed && t.isStringLiteral(path.node.property)) {
            const property = path.node.property.value;

            // Replace with dot notation
            path.node.computed = false;
            path.node.property = t.identifier(property);
        }
    }
});
console.log("> Simplified dict expressions");


const { code: newCode } = generate(ast);
let outputFile = process.argv[3] || 'out.js';
fs.writeFileSync(outputFile, newCode, 'utf-8');
console.log(`> Saved to ${outputFile}`);
console.log("<><><><><><><><><<><><><><><><><><<><><><><><><><><<><><><><><><><><>")