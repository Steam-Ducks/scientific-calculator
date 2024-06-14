"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcaoSegundoGrau = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function funcaoSegundoGrau() {
    const precisao = 0.000001;
    console.log("");
    console.log("========== FUNÇÃO DE SEGUNDO GRAU ==========");
    console.log("");
    console.log("Identifique os valores da função:");
    console.log("f(x) = A.x^2 + B.x + C ");
    console.log();
    let eq_a;
    let eq_b;
    let eq_c;
    do {
        eq_a = parseFloat(prompt("Valor de A: "));
        eq_b = parseFloat(prompt("Valor de B: ") || '0');
        eq_c = parseFloat(prompt("Valor de C: ") || '0');
        if (isNaN(eq_a) || isNaN(eq_b) || isNaN(eq_c) || eq_a === 0) {
            console.log("Por favor, insira valores numéricos válidos.");
        }
        console.log();
    } while (isNaN(eq_a) || isNaN(eq_b) || isNaN(eq_c) || eq_a === 0);
    console.clear();
    console.log("----------------------------------");
    let delta = eq_b * eq_b - 4 * eq_a * eq_c;
    console.log("Delta: ", delta);
    console.log("----------------------------------");
    if (delta < 0) {
        console.log("Resulado: Não existem raízes reais da função");
        console.log();
    }
    else {
        let raiz = delta / 2;
        let rdelta = raiz;
        while (raiz > precisao) {
            let nraiz = (raiz + delta / raiz) / 2;
            if ((raiz - nraiz) < precisao) {
                raiz = nraiz;
                break;
            }
            raiz = nraiz;
            rdelta = raiz;
        }
        rdelta = raiz;
        const R1 = ((-eq_b) + (rdelta)) / (2 * eq_a);
        const R2 = ((-eq_b) - (rdelta)) / (2 * eq_a);
        console.log("Resulado: ");
        console.log("x': ", R1.toFixed(2));
        console.log("x'': ", R2.toFixed(2));
        console.log();
    }
}
exports.funcaoSegundoGrau = funcaoSegundoGrau;
