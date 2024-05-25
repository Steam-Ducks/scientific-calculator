const promptSync = require('prompt-sync')();

let x : number;

console.log("Escreva um número: ");
x = parseFloat(promptSync(""));

let n = x;
let resultado = 1;

if (n <= 0) {
    while (n >= 1) {
            resultado *= n;
            n--;
        }
}
console.log(`O fatorial de ${x} é ${resultado}.`);
