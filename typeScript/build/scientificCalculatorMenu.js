"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const addition_1 = require("./basicOperations/addition");
const subtraction_1 = require("./basicOperations/subtraction");
const multiplication_1 = require("./basicOperations/multiplication");
const division_1 = require("./basicOperations/division");
const quadraticFunction_1 = require("./specialOperations/quadraticFunction");
const compoundInterest_1 = require("./interest/compoundInterest");
const simpleInterest_1 = require("./interest/simpleInterest");
const fatorial_1 = require("./specialOperations/fatorial");
const convertBinaryToDecimal_1 = require("./conversions/convertBinaryToDecimal");
const convertDecimalToBinary_1 = require("./conversions/convertDecimalToBinary");
const convertOctalToBinary_1 = require("./conversions/convertOctalToBinary");
const convertBinaryToOctal_1 = require("./conversions/convertBinaryToOctal");
const convertBinaryToHexadecimal_1 = require("./conversions/convertBinaryToHexadecimal");
const convertHexadecimalToBinary_1 = require("./conversions/convertHexadecimalToBinary");
const stringConcatenation_1 = require("./specialOperations/stringConcatenation");
exports.prompt = (0, prompt_sync_1.default)();
let opcao;
do {
    console.clear();
    console.log("╔════════════════════════════════════════════════════╗");
    console.log("║         ➕ ➖  CALCULADORA CIENTÍFICA ✖️  ➗        ║");
    console.log("║                                                    ║");
    console.log("║ Digite a opção desejada:                           ║");
    console.log("║                                                    ║");
    console.log("║ [1] SOMA                                           ║");
    console.log("║ [2] SUBTRAÇÃO                                      ║");
    console.log("║ [3] MULTIPLICAÇÃO                                  ║");
    console.log("║ [4] DIVISÃO                                        ║");
    console.log("║ [5] FATORIAL                                       ║");
    console.log("║ [6] FUNÇÃO DE SEGUNDO GRAU                         ║");
    console.log("║ [7] CÁLCULO DE JUROS                               ║");
    console.log("║ [8] CONVERSÃO DE BASE                              ║");
    console.log("║ [9] CONCATENAÇÃO DE STRINGS                        ║");
    console.log("║ [0] SAIR                                           ║");
    console.log("╚════════════════════════════════════════════════════╝");
    console.log();
    opcao = (0, exports.prompt)("Opção desejada: ");
    switch (opcao) {
        case "1":
            do {
                (0, addition_1.soma)();
            } while (repetirOperacao());
            break;
        case "2":
            do {
                (0, subtraction_1.subtraction)();
            } while (repetirOperacao());
            break;
        case "3":
            do {
                (0, multiplication_1.multiplication)();
            } while (repetirOperacao());
            break;
        case "4":
            do {
                (0, division_1.divisao)();
            } while (repetirOperacao());
            break;
        case "5":
            do {
                (0, fatorial_1.fatorial)();
            } while (repetirOperacao());
            break;
        case "6":
            do {
                (0, quadraticFunction_1.funcaoSegundoGrau)();
            } while (repetirOperacao());
            break;
        case "7":
            do {
                selecionarTipoJuros();
            } while (repetirOperacao());
            break;
        case "8":
            do {
                selecionarConversao();
            } while (repetirOperacao());
            break;
        case "9":
            do {
                (0, stringConcatenation_1.concatenacaoStrings)();
            } while (repetirOperacao());
            break;
        case "0":
            console.log("");
            console.log("PROGRAMA ENCERRADO!");
            console.log("Obrigada por usar nossa calculadora! ☻");
            console.log("");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
    if (opcao !== "0") {
        (0, exports.prompt)("Pressione Enter para continuar...");
    }
} while (opcao !== "0");
function repetirOperacao() {
    console.log();
    const resposta = (0, exports.prompt)("Deseja repetir a mesma operação? (S/N): ");
    console.log();
    return resposta.toUpperCase() === "S";
}
function selecionarTipoJuros() {
    console.clear();
    console.log("╔═════════════════════════════════════╗");
    console.log("║          CÁLCULO DE JUROS           ║");
    console.log("║                                     ║");
    console.log("║ Digite a opção desejada:            ║");
    console.log("║                                     ║");
    console.log("║ [1] JUROS SIMPLES                   ║");
    console.log("║ [2] JUROS COMPOSTOS                 ║");
    console.log("╚═════════════════════════════════════╝");
    console.log("");
    const resposta = (0, exports.prompt)("Opção desejada: ");
    switch (resposta) {
        case "1":
            (0, simpleInterest_1.simpleInterest)();
            break;
        case "2":
            (0, compoundInterest_1.compoundInterest)();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}
function selecionarConversao() {
    console.clear();
    console.log("╔═════════════════════════════════════╗");
    console.log("║          CONVERSÃO DE BASE          ║");
    console.log("║                                     ║");
    console.log("║ Digite a opção desejada:            ║");
    console.log("║                                     ║");
    console.log("║ [1] BINÁRIO X DECIMAL               ║");
    console.log("║ [2] DECIMAL X BINÁRIO               ║");
    console.log("║ ----------------------------------- ║");
    console.log("║ [3] BINÁRIO X OCTAL                 ║");
    console.log("║ [4] OCTAL X BINÁRIO                 ║");
    console.log("║ ----------------------------------- ║");
    console.log("║ [5] BINÁRIO X HEXADECIMAL           ║");
    console.log("║ [6] HEXADECIMAL X BINÁRIO           ║");
    console.log("╚═════════════════════════════════════╝");
    console.log("");
    const resposta = (0, exports.prompt)("Opção desejada: ");
    switch (resposta) {
        case "1":
            (0, convertBinaryToDecimal_1.converterBinarioParaDecimal)();
            break;
        case "2":
            (0, convertDecimalToBinary_1.converterDecimalParaBinario)();
            break;
        case "3":
            (0, convertBinaryToOctal_1.converterBinarioparaOctal)();
            break;
        case "4":
            (0, convertOctalToBinary_1.converterOctalparaBinario)();
            break;
        case "5":
            (0, convertBinaryToHexadecimal_1.converterBinarioParaHexadecimal)();
            break;
        case "6":
            (0, convertHexadecimalToBinary_1.converterHexadecimalParaBinario)();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}
