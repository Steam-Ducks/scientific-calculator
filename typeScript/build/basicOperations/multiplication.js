"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplication = void 0;
var prompt = require("prompt-sync")();
function multiplication() {
    var value = 0;
    var accumulatedValue = 1; // Inicializamos com 1 para multiplicação
    console.log("");
    console.log("========== MULTIPLICAÇÃO ==========");
    console.log("");
    var counter = 0;
    do {
        counter = parseInt(prompt("Quantos números deseja multiplicar? "));
        if (isNaN(counter) || counter <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (isNaN(counter) || counter <= 1);
    for (var i = 1; i <= counter; i++) {
        if (i === counter && accumulatedValue === 1) { // Primeira entrada
            console.log("Informe um número: ");
            value = parseFloat(prompt("".concat(accumulatedValue, " * ")));
            while (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                value = parseFloat(prompt("".concat(accumulatedValue, " * ")));
            }
            accumulatedValue *= value; // Multiplicação ao invés de subtração
        }
        else if (accumulatedValue === 1) { // Primeira entrada
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
            value = parseFloat(prompt("".concat(accumulatedValue, " * ")));
            while (isNaN(value)) {
                console.log("Por favor, insira um número válido.");
                value = parseFloat(prompt("".concat(accumulatedValue, " * ")));
            }
            accumulatedValue *= value; // Multiplicação ao invés de subtração
        }
        var formattedValue = Number.isInteger(accumulatedValue)
            ? accumulatedValue.toFixed(0)
            : accumulatedValue.toFixed(2);
        console.log("Resultado parcial: ".concat(formattedValue));
    }
    console.log();
    var finalFormattedValue = Number.isInteger(accumulatedValue)
        ? accumulatedValue.toFixed(0)
        : accumulatedValue.toFixed(2);
    console.log("O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(finalFormattedValue));
}
exports.multiplication = multiplication;
