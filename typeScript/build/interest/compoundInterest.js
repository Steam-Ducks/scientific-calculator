"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compountInterest = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function compountInterest() {
    let montante;
    let capital;
    let taxa;
    let tempo;
    let i;
    let juros;
    capital = parseFloat(prompt("Insira o valor do Capital inicial: "));
    console.log("");
    taxa = parseFloat(prompt("Agora, insira a Taxa de Juros: "));
    console.log("");
    i = taxa / 100;
    tempo = parseFloat(prompt("Escreva o tempo em meses: "));
    console.log("");
    let fator = 1 + i;
    let potencia = 1;
    for (let k = 0; k < tempo; k++) {
        potencia *= fator;
    }
    montante = capital * potencia;
    juros = montante - capital;
    console.log("");
    console.log("Seu Montante total final será: R$", montante.toFixed(2));
    console.log("");
    console.log("Total em Juros:", " R$", juros.toFixed(2));
}
exports.compountInterest = compountInterest;
