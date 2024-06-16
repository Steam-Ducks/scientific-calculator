"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = void 0;
const prompt = require("prompt-sync")();
function subtraction() {
    let value = 0;
    let accumulatedValue = 0;
    console.log("");
    console.log("═════════════════════════════════════");
    console.log("              SUBTRAÇÃO              ");
    console.log("");
    let counter = 0;
    do {
        counter = parseInt(prompt("Quantos números deseja subtrair? "));
        if (isNaN(counter) || counter <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (isNaN(counter) || counter <= 1);
    for (let i = 1; i <= counter; i++) {
        if (i === counter && accumulatedValue === 0) {
            console.log("Informe um número: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
            while (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                value = parseFloat(prompt(`${accumulatedValue} - `));
            }
            accumulatedValue -= value;
            break;
        }
        if (accumulatedValue === 0) {
            console.log();
            accumulatedValue = parseFloat(prompt("Valor: "));
            while (isNaN(accumulatedValue)) {
                console.log("Por favor, insira um número válido.");
                accumulatedValue = parseFloat(prompt("Valor: "));
            }
        }
        else {
            console.log();
            console.log("Valor: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
            while (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                value = parseFloat(prompt(`${accumulatedValue} - `));
            }
        }
        accumulatedValue -= value;
    }
    console.log();
    const formattedValue = Number.isInteger(accumulatedValue)
        ? accumulatedValue.toFixed(0)
        : accumulatedValue.toFixed(2);
    console.log(`O resultado da subtração é: ${formattedValue}`);
    console.log("═════════════════════════════════════");
}
exports.subtraction = subtraction;
