const promptSync = require('prompt-sync')();

let x;

console.log("Escreva um número: ");
x = parseFloat(promptSync(""));

let n = x;
let resultado = 1;

while (n >= 1) {
    resultado *= n;
    n--;
}
console.log(`O fatorial de ${x} é ${resultado}.`);
