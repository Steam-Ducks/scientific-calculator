"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
// Função principal para executar a calculadora de multiplicação
function calculadora() {
    var prompt = (0, prompt_sync_1.default)(); // Inicializa o prompt-sync
    var acVal = 1;
    var continuar = true;
    console.log("========== Multiplicação ==========");
    console.log("Pressione 'F' para finalizar a operação");
    while (continuar) {
        console.log();
        var valStr = prompt("Valor: ");
        if (valStr.toLowerCase() === 'f') {
            continuar = false;
            break;
        }
        var val = parseInt(valStr, 10);
        if (isNaN(val)) {
            console.log("Entrada inválida, por favor insira um número.");
            continue;
        }
        var acValStr = acVal;
        acVal = acVal * val;
        console.log("Resultado: ".concat(acValStr, " X ").concat(val, " = ").concat(acVal));
    }
    console.log("Opera\u00E7\u00E3o finalizada. Resultado final: ".concat(acVal));
}
// Chama a função principal para iniciar a calculadora
calculadora();
