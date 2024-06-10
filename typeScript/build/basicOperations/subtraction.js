"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function subtraction() {
    var value = 0;
    var accumulatedValue = 0;
    console.log("");
    console.log("========== SUBTRAÇÃO ==========");
    console.log("");
    var counter = parseInt(prompt("Quantos números deseja subtrair? "));
    if (isNaN(counter) || counter <= 0) {
        console.log("Por favor, insira um número válido.");
        return;
    }
    for (var i = 1; i <= counter; i++) {
        if (i === counter && accumulatedValue === 0) {
            console.log("Informe um número: ");
            value = parseFloat(prompt("".concat(accumulatedValue, " - ")));
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
            value = parseFloat(prompt("".concat(accumulatedValue, " - ")));
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
    var formattedValue = accumulatedValue.toFixed(2);
    console.log("O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(formattedValue));
}
exports.subtraction = subtraction;
subtraction();
