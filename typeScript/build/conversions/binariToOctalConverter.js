"use strict";
const promptSync = require('prompt-sync');
const promp = promptSync();
console.log();
let binario = promp("Digite um numero binario para convertet ");
console.log();
let potencia = 0;
let decimal = 0;
let octal = 0;
let Resul = "";
if (binario) {
    for (let index = binario.length - 1; index >= 0; index--) {
        if (binario[index] === "1") {
            decimal += 2 ** potencia;
        }
        potencia++;
    }
    do {
        octal = Math.floor(decimal % 8);
        decimal /= 8;
        Resul += octal.toString();
    } while (decimal > 1);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("O número octal é: ", reverseString(Resul));
