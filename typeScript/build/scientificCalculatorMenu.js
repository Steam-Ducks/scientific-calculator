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
    console.log("[5] FATORIAL");
    console.log("[6] FUNCAO DE SEGUNDO GRAU");
    console.log("[7] CALCULO DE JUROS");
    console.log("[8] SAIR");
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
            } while (repetirOperacao());
            break;
        case '3':
            do {
            } while (repetirOperacao());
            break;
        case '4':
            do {
            } while (repetirOperacao());
            break;
        case '5':
            do {
            } while (repetirOperacao());
            break;
        case '6':
            do {
            } while (repetirOperacao());
            break;
        case '7':
            do {
            } while (repetirOperacao());
            break;
        case '8':
            console.log("PROGRAMA ENCERRADO!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
    if (opcao !== '8') {
        prompt("Pressione Enter para continuar...");
    }
} while (opcao !== '8');
function repetirOperacao() {
    const resposta = prompt("Deseja repetir a mesma operação? (S/N): ");
    console.log();
    return resposta.toUpperCase() === 'S';
}
