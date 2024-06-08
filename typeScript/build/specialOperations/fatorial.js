"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function fatorial() {
    var value;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    do {
        var input = prompt("Escreva um número: ");
        value = parseFloat(input);
        if (isNaN(value)) {
            console.log("Por favor, insira um número válido.");
        }
        if (value < 0) {
            console.log("Por favor, escreva um número maior ou igual a 0");
        }
    } while (isNaN(value) || value < 0);
    var holder = value;
    var resultado = 1;
    if (holder > -1) {
        if (holder === 0) { }
        else {
            if (holder === 1) { }
            else {
                if (holder >= 2) {
                    while (holder >= 1) {
                        resultado *= holder;
                        holder--;
                    }
                }
            }
        }
        console.log("O resultado do fatorial de ".concat(value, " \u00E9 ").concat(resultado, "."));
    }
}
exports.fatorial = fatorial;
