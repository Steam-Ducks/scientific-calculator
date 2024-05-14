"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let binario;
let decimal = 0;
let potencia = 0;
let valido = false;
while (!valido) {
    valido = true;
    binario = prompt("Digite um número binário para converter: ");
    for (let index = 0; index < binario.length; index++) {
        let letraAtual = binario[index];
        if (letraAtual !== "1" && letraAtual !== "0") {
            valido = false;
            break;
        }
    }
    if (!valido) {
        console.log("Binario invalido!");
    }
    for (let index = binario.length - 1; index >= 0; index--) {
        if (binario[index] === "1") {
            decimal += 2 ** potencia;
        }
        potencia++;
    }
}
console.log("O número decimal é: ", decimal);
