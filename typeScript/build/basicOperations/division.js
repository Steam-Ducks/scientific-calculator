"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisao = void 0;
var prompt = require('prompt-sync')();
function divisao() {
    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");
    //==================================================================================
    // declara a variavel de quantidade
    var quantidade = 0;
    do {
        quantidade = parseInt(prompt("Quantos números deseja dividir? "));
        // checa se o nuero é maior que 1
        if (isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
        //aqui está a regra de ser maior ou igual a 1. Não da para dividir menos de dois numeros
    } while (isNaN(quantidade) || quantidade <= 1);
    //==================================================================================
    //Recebe o numero dividendo
    var divisao = 0;
    do {
        divisao = parseFloat(prompt("Valor: "));
        if (isNaN(divisao)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
        //aqui está a regra de ser um numero
    } while (isNaN(divisao));
    //==================================================================================
    // Recebe os dividendos
    for (var i = 1; i < quantidade; i++) {
        var numero = parseFloat(prompt("Valor: "));
        // Verifica se não está sendo dividido por 0
        if (isNaN(numero) || numero <= 0) {
            console.log("Não é posspivel dividir por 0");
            console.log("Por favor, insira um número válido.");
            console.log("");
            i--;
            continue;
        }
        // Realiza a operação
        divisao /= numero;
        //fecha o loop
    }
    //Exibe o resultado
    console.log();
    console.log("O resultado da divisao \u00E9: ".concat(divisao));
    console.log();
}
exports.divisao = divisao;
