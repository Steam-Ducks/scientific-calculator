"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const addition_1 = require("./addition");
const prompt = (0, prompt_sync_1.default)();
let opcao;
do {
    console.clear();
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(":                CALCULADORA CIENTIFICA                :");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log();
    console.log("Digite a função que deseja utilizar:");
    console.log();
    console.log("[1] SOMA");
    console.log("[2] SUBTRAÇÃO");
    console.log("[3] MULTIPLICAÇÃO");
    console.log("[4] DIVISÃO");
    console.log("[5] SAIR");
    console.log();
    opcao = prompt("Opção desejada: ");
    switch (opcao) {
        case '1':
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case '2':
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case '3':
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case '4':
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case '5':
            console.log("PROGRAMA ENCERRADO!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
    if (opcao !== '5') {
        prompt("Pressione Enter para continuar...");
    }
} while (opcao !== '5');
function repetirOperacao() {
    const resposta = prompt("Deseja repetir a mesma operação? (S/N): ");
    console.log();
    return resposta.toUpperCase() === 'S';
}
