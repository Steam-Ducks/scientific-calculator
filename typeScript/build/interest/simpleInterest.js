"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleInterest = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function simpleInterest() {
    console.log("");
    console.log("========== JUROS SIMPLES ==========");
    console.log("");
    const valor = parseFloat(input("Capital inicial: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido. ");
    }
    let taxa = parseFloat(input("Taxa de juros/Mensal: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }
    const tempo = parseInt(input("Tempo/Meses: "));
    console.log("");
    taxa = taxa / 100;
    const juros = valor * (taxa) * tempo;
    const montante = valor + juros;
    console.log(`Capital Inicial: R$${valor.toFixed(2)}`);
    console.log("");
    console.log(`Taxa de Juros: ${taxa * 100}%`);
    console.log("");
    console.log(`Tempo: ${tempo} meses`);
    console.log("");
    console.log(`Montante: R$${montante.toFixed(2)}`);
    console.log("");
    console.log(`Total em Juros: R$${juros.toFixed(2)}`);
}
exports.simpleInterest = simpleInterest;
