"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
const promptSync = require("prompt-sync");
const prompt = promptSync();
function fatorial() {
    let x;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    x = parseFloat(prompt("Escreva um número: "));
    let n = x;
    let resultado = 1;
    if (n >= 0) {
        while (n >= 1) {
            resultado *= n;
            n--;
        }
    }
    console.log(`O fatorial de ${x} é ${resultado}.`);
}
exports.fatorial = fatorial;
