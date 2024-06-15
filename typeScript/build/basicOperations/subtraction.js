"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = void 0;
const promptSync = require("prompt-sync");
const prompt = promptSync();
function subtraction() {
    let value = 0;
    let accumulatedValue = 0;
    console.log("");
    console.log("========== SUBTRAÇÃO ==========");
    console.log("");
    const counter = parseInt(prompt("Quantos números deseja subtrair? "));
    if (isNaN(counter) || counter <= 0) {
        console.log("Por favor, insira um número válido.");
        return;
    }
    for (let i = 1; i <= counter; i++) {
        if (i === counter && accumulatedValue === 0) {
            console.log("Informe um número: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
            if (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                accumulatedValue = 0;
                i--;
                continue;
            }
            accumulatedValue -= value;
            break;
        }
        if (accumulatedValue === 0) {
            console.log();
            accumulatedValue = parseFloat(prompt("Valor: "));
            if (isNaN(accumulatedValue)) {
                console.log("Por favor, insira um número válido.");
                accumulatedValue = 0;
                i--;
                continue;
            }
        }
        else {
            console.log();
            console.log("Valor: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
            if (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                value = 0;
                i--;
                continue;
            }
        }
        accumulatedValue -= value;
    }
    console.log();
    const formattedValue = accumulatedValue.toFixed(2);
    console.log(`O resultado da subtração é: ${formattedValue}`);
}
exports.subtraction = subtraction;
