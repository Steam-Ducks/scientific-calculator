"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = void 0;
const promptSync = require("prompt-sync");
const prompt = promptSync();
function subtraction() {
    let value = 0;
    let accumulatedValue = 0;
    console.log();
    const counter = parseInt(prompt("Quantos números deseja subtrair? "));
    accumulatedValue = 0;
    for (let i = 1; i <= counter; i++) {
        if (i === counter && accumulatedValue === 0) {
            console.log("Valor: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
            accumulatedValue -= value;
            break;
        }
        if (accumulatedValue === 0) {
            console.log();
            accumulatedValue = parseFloat(prompt("Valor: "));
        }
        else {
            console.log();
            console.log("Valor: ");
            value = parseFloat(prompt(`${accumulatedValue} - `));
        }
        accumulatedValue -= value;
    }
    console.log();
    console.log(`O resultado da subtração é: ${accumulatedValue}`);
}
exports.subtraction = subtraction;
