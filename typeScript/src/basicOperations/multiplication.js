"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}
// Função para obter entrada do usuário e validar
function obterNumero(mensagem) {
    var input = prompt(mensagem);
    var numero = Number(input);
    if (isNaN(numero)) {
        throw new Error("Entrada inválida! Por favor, insira um número.");
    }
    return numero;
}
// Função principal para executar a calculadora
function calculadora() {
    var continuar = true;
    while (continuar) {
        try {
            var num1 = obterNumero("Insira o primeiro número: ");
            var num2 = obterNumero("Insira o segundo número: ");
            var resultado = multiplicar(num1, num2);
            console.log("A multiplica\u00E7\u00E3o de ".concat(num1, " e ").concat(num2, " \u00E9: ").concat(resultado));
            var resposta = prompt("Quer continuar? Sim ou Não: ").toLowerCase();
            if (resposta === "não" || resposta === "nao" || resposta === "n") {
                continuar = false;
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }
}
// Executar a calculadora
calculadora();
