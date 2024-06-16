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
    var num = "";
    var validInput;
    var quantidade = 0;
    do {
        num = prompt("Quantos números deseja dividir? ");
        // checa se o nuero é maior que 1
        validInput = /^\d+$/.test(num); // Verifica se a entrada contém apenas dígitos
        // Converte a quantidade para um número inteiro
        quantidade = parseInt(num);
        // Checa se o número é maior que 1 e se a entrada é válida (somente números)
        if (!validInput || isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
        // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);
    //==================================================================================
    //Recebe o numero dividendo
    var dividendo = 0;
    do {
        num = prompt("Valor: ");
        validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos
        // Converte a quantidade para um número inteiro
        dividendo = parseFloat(num);
        dividendo = parseFloat(dividendo.toFixed(2));
        // Checa se o número é maior que 1 e se a entrada é válida (somente números)
        if (!validInput || isNaN(dividendo)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
        // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(dividendo));
    //==================================================================================
    // Recebe os divisores
    var divisor = 0;
    for (var i = 1; i < quantidade;) {
        do {
            i++;
            console.log();
            console.log('Valor:');
            num = prompt("".concat(dividendo, " / "));
            // Verifica se não está sendo dividido por 0
            validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos
            // Converte a quantidade para um número inteiro
            divisor = parseFloat(num);
            divisor = parseFloat(divisor.toFixed(2));
            // Checa se o número é maior que 1 e se a entrada é válida (somente números)
            if (!validInput || isNaN(divisor) || divisor <= 0) {
                console.log("Por favor, insira um número válido.");
                console.log("");
                i--;
            }
        } while (!validInput || isNaN(divisor) || divisor <= 0);
        // Realiza a operação
        dividendo /= divisor;
        dividendo = parseFloat(dividendo.toFixed(2));
        //fecha o loop
    }
    var resul = dividendo;
    resul = parseFloat(resul.toFixed(2));
    //Exibe o resultado
    console.log();
    console.log("O resultado da divisao \u00E9: ".concat(resul));
    console.log();
}
exports.divisao = divisao;
