"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function calculadora() {
    const prompt = (0, prompt_sync_1.default)();
    let acVal = 1;
    let continuar = true;
    console.log("========== Multiplicação ==========");
    console.log("Pressione 'F' para finalizar a operação");
    while (continuar) {
        console.log();
        const valStr = prompt("Valor: ");
        if (valStr.toLowerCase() === 'f') {
            continuar = false;
            break;
        }
        const val = parseInt(valStr, 10);
        if (isNaN(val)) {
            console.log("Entrada inválida, por favor insira um número.");
            continue;
        }
        const acValStr = acVal;
        acVal = acVal * val;
        console.log(`Resultado: ${acValStr} X ${val} = ${acVal}`);
    }
    console.log(`Operação finalizada. Resultado final: ${acVal}`);
}
calculadora();
