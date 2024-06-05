"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function fatorial() {
    var x;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    x = parseFloat(prompt("Escreva um número: "));
    var n = x;
    var resultado = 1;
    if (n < 0) {
        console.log("Escreva um número maior ou igual a 0");
    }
    else {
        if (n = 0) { }
        else {
            if (n = 1) { }
            else {
                if (n >= 2) {
                    while (n >= 1) {
                        resultado *= n;
                        while (n >= 2) {
                            console.log(n, "x");
                        }
                        n--;
                    }
                }
            }
        }
    }
    console.log("O fatorial de ".concat(x, " \u00E9 ").concat(resultado, "."));
}
exports.fatorial = fatorial;
