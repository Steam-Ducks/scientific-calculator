"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterHexadecimalParaBinario = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function hexadecimalValido() {
    let valido = false;
    let hexadecimal = "";
    console.log("");
    console.log("========== CONVERSÃO HEXADECIMAL X BINÁRIO ==========");
    while (!valido) {
        valido = true;
        console.log();
        hexadecimal = prompt("Digite um número hexadecimal para converter: ");
        if (hexadecimal) {
            for (let index = 0; index < hexadecimal.length; index++) {
                let letraAtual = hexadecimal[index].toUpperCase();
                if (!/[0-9A-F]/.test(letraAtual)) {
                    valido = false;
                    break;
                }
            }
        }
        if (!valido) {
            console.log("");
            console.log("Por favor, insira um numero valido.");
        }
    }
    return hexadecimal.toUpperCase();
}
function hexadecimalParaBinario(hexadecimal) {
    const tabelaBinario = {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0111",
        "8": "1000",
        "9": "1001",
        "A": "1010",
        "B": "1011",
        "C": "1100",
        "D": "1101",
        "E": "1110",
        "F": "1111"
    };
    let binario = "";
    for (let i = 0; i < hexadecimal.length; i++) {
        binario += tabelaBinario[hexadecimal[i]];
    }
    binario = binario.replace(/^0+/, '');
    return binario.length > 0 ? binario : "0";
}
function converterHexadecimalParaBinario() {
    let hexadecimal = hexadecimalValido();
    let binario = hexadecimalParaBinario(hexadecimal);
    console.log("");
    console.log("Resultado:");
    console.log("Hexadecimal:", hexadecimal);
    console.log("Binário:", binario);
}
exports.converterHexadecimalParaBinario = converterHexadecimalParaBinario;
