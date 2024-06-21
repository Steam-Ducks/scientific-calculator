"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisao = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function divisao() {
    console.log("");
    console.log("═════════════════════════════════════");
    console.log("               DIVISÃO               ");
    console.log("");
    let num = "";
    let validInput;
    let quantidade = 0;
    do {
        num = prompt("Quantos números deseja dividir? ");
        validInput = /^\d+$/.test(num);
        quantidade = parseInt(num);
        if (!validInput || isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);
    let dividendo = 0;
    do {
        num = prompt(`Valor: `);
        validInput = /^-?\d*\.?\d+$/.test(num);
        dividendo = parseFloat(num);
        dividendo = parseFloat(dividendo.toFixed(2));
        if (!validInput || isNaN(dividendo)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(dividendo));
    let divisor = 0;
    for (let i = 1; i < quantidade;) {
        do {
            i++;
            console.log();
            console.log('Valor:');
            num = prompt(`${dividendo} / `);
            validInput = /^-?\d*\.?\d+$/.test(num);
            divisor = parseFloat(num);
            divisor = parseFloat(divisor.toFixed(2));
            if (!validInput || isNaN(divisor) || divisor == 0) {
                console.log("Por favor, insira um número válido.");
                console.log("");
                i--;
            }
        } while (!validInput || isNaN(divisor) || divisor == 0);
        dividendo /= divisor;
        dividendo = parseFloat(dividendo.toFixed(2));
    }
    const resul = parseFloat(dividendo.toFixed(2));
    console.log();
    console.log(`O resultado da divisao é: ${resul}`);
    console.log("═════════════════════════════════════");
}
exports.divisao = divisao;
