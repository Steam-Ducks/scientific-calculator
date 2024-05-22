"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync({ sigint: true });
function multiplicacao() {
    var repete = 1;
    while (repete === 1) {
        console.log("========== Função Multiplicação ==========");
        console.log();
        console.log("Insira os valores, e eles serão automaticamente multiplicados, ");
        console.log();
        console.log("para finalizar, pressione '=' ou multiplique por zero.");
        console.log();
        console.log("=============================================================");
        console.log();
        var valorAcumulado = 1.0;
        while (true) {
            var valorString = prompt("Valor: ".concat(valorAcumulado, " * "));
            if (valorString === '=' || valorString === '0') {
                break;
            }
            var valor = parseFloat(valorString);
            if (isNaN(valor)) {
                console.log("Por favor, insira um número válido.");
                continue;
            }
            valorAcumulado *= valor;
            console.log("Resultado: ".concat(valorAcumulado));
            console.log();
        }
        console.log();
        console.log("O Resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(valorAcumulado));
        console.log("=============================================================");
        console.log();
        repete = parseInt(prompt("Deseja calcular outro valor? \n1 <- Sim\n2 <- Não\nResposta: "));
        console.log("=============================================================");
        console.log("");
        if (repete !== 1) {
            console.log("Encerrando o programa...");
        }
    }
}
multiplicacao();
