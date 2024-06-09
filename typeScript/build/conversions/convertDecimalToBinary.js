"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterDecimalParaBinario = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function converterDecimalParaBinario() {
    console.log("========== Conversão B10 para B2 ==========");
    console.log();
    let binario = "";
    const numeroOriginal = numeroValido("Digite um número para converter: ", -1);
    let numero = numeroOriginal;
    if (numero === 0) {
        binario = "0";
    }
    else {
        while (numero > 0) {
            let resto = numero % 2;
            binario = resto.toString() + binario;
            numero = Math.floor(numero / 2);
        }
    }
    console.log();
    console.log("Resultado:");
    console.log("Decimal: ", numeroOriginal);
    console.log("Binário:", binario);
}
exports.converterDecimalParaBinario = converterDecimalParaBinario;
converterDecimalParaBinario();
function numeroValido(texto, minimo = Number.MIN_SAFE_INTEGER) {
    let numero;
    while (true) {
        numero = parseInt(prompt(texto));
        if (!isNaN(numero) && numero > minimo) {
            break;
        }
        console.log("Por favor, insira um número válido.");
        console.log();
    }
    return numero;
}
