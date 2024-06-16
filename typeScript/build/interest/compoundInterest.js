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
    console.log("═════════════════════════════════════");
    console.log("           JUROS COMPOSTOS           ");
    console.log("");
    capital = numeroValido("Capital inicial: ");
    taxa = numeroValido("Taxa de Juros/Mensal: ");
    i = taxa / 100;
    tempo = numeroValido("Tempo/Meses: ");
    console.log("");
    let fator = 1 + i;
    let potencia = 1;
    for (let k = 0; k < tempo; k++) {
        potencia *= fator;
    }
    montante = capital * potencia;
    juros = montante - capital;
    console.log("");
    console.log("Resultado:");
    console.log(`• Capital Inicial: R$${capital.toFixed(2)}`);
    console.log(`• Taxa de Juros: ${taxa}%`);
    console.log(`• Tempo: ${tempo} meses`);
    console.log(`• Montante: R$${montante.toFixed(2)}`);
    console.log(`• Total em Juros: R$${juros.toFixed(2)}`);
    console.log("═════════════════════════════════════");
}
exports.compoundInterest = compoundInterest;
function numeroValido(texto) {
    let numero;
    while (true) {
        const entrada = prompt(texto);
        if (/^-?\d+(\.\d+)?$/.test(entrada)) {
            numero = parseFloat(entrada);
            if (numero > 0) {
                break;
            }
        }
        console.log("Por favor, insira um número válido.");
        console.log();
    }
    return numero;
}
