"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterBinarioParaHexadecimal = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function binarioValido() {
    let valido = false;
    let binario = "";
    console.log("");
    console.log("========== Conversão B2 x B16 ==========");
    while (!valido) {
        valido = true;
        console.log();
        binario = prompt("Digite um número binário para converter: ");
        if (binario) {
            for (let index = 0; index < binario.length; index++) {
                let letraAtual = binario[index];
                if (letraAtual !== "1" && letraAtual !== "0") {
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
    return binario;
}
function binarioParaHexadecimal(binario) {
    while (binario.length % 4 !== 0) {
        binario = "0" + binario;
    }
    let hexadecimal = "";
    const tabelaHexadecimal = {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "A",
        "1011": "B",
        "1100": "C",
        "1101": "D",
        "1110": "E",
        "1111": "F"
    };
    for (let i = 0; i < binario.length; i += 4) {
        let grupo = binario.substring(i, i + 4);
        hexadecimal += tabelaHexadecimal[grupo];
    }
    return hexadecimal;
}
function converterBinarioParaHexadecimal() {
    let binario = binarioValido();
    let hexadecimal = binarioParaHexadecimal(binario);
    console.log("");
    console.log("Resultado:");
    console.log("Binário:", binario);
    console.log("Hexadecimal:", hexadecimal);
}
exports.converterBinarioParaHexadecimal = converterBinarioParaHexadecimal;
