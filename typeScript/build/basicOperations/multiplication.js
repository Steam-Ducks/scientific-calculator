"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicacao = void 0;
const promptSync = require("prompt-sync");
const prompt = promptSync();
function multiplicacao() {
    let value = 0;
    let accumulatedValue = 1;
    console.log("");
    console.log("========== MULTIPLICAÇÃO ==========");
    console.log("");
    const counter = parseInt(prompt("Quantos números deseja multiplicar? "));
    if (isNaN(counter) || counter <= 0) {
        console.log("Por favor, insira um número válido de quantidades.");
        return;
    }
    for (let i = 1; i <= counter; i++) {
        console.log();
        value = parseFloat(prompt(`Valor ${i}: `));
        if (isNaN(value)) {
            console.log("Por favor, insira um número válido.");
            i--;
            continue;
        }
        accumulatedValue *= value;
    }
    console.log();
    const formattedValue = accumulatedValue.toFixed(2);
    console.log(`O resultado da multiplicação é: ${formattedValue}`);
}
exports.multiplicacao = multiplicacao;
