"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compoundInterest = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function compoundInterest() {
    let montante;
    let capital;
    let taxa;
    let tempo;
    let i;
    let juros;
    console.log("");
    console.log("========== JUROS COMPOSTOS ==========");
    console.log("");
    capital = parseFloat(prompt("Capital inicial: "));
    if (isNaN(capital) || capital <= 0) {
        console.log("Por favor digite um valor válido. ");
    }
    taxa = parseFloat(prompt("Taxa de Juros/Mensal "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }
    i = taxa / 100;
    tempo = parseFloat(prompt("Tempo/Meses: "));
    console.log("");
    let fator = 1 + i;
    let potencia = 1;
    for (let k = 0; k < tempo; k++) {
        potencia *= fator;
    }
    montante = capital * potencia;
    juros = montante - capital;
    console.log(`Capital Inicial: R$${capital.toFixed(2)}`);
    console.log("");
    console.log(`Taxa de Juros: ${taxa}%`);
    console.log("");
    console.log(`Tempo: ${tempo} meses`);
    console.log("");
    console.log(`Montante: R$${montante.toFixed(2)}`);
    console.log("");
    console.log(`Total em Juros: R$${juros.toFixed(2)}`);
}
exports.compoundInterest = compoundInterest;
