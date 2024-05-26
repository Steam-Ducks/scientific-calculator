"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcaoSegundoGrau = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function funcaoSegundoGrau() {
    let eq_a, eq_b, eq_c;
    let delta, R1, R2, rdelta, precisao, raiz, nraiz;
    precisao = 0.000001;
    console.log("");
    console.log("========== FUNÇÃO DE SEGUNDO GRAU ==========");
    console.log("");
    console.log("Identifique os valores da função:");
    console.log("f(x) = A.x^2 + B.x + C ");
    console.log();
    console.log("-----------------------------------");
    eq_a = parseFloat(prompt("Entre com o valor de A: ") || '0');
    eq_b = parseFloat(prompt("Entre com o valor de B: ") || '0');
    eq_c = parseFloat(prompt("Entre com o valor de C: ") || '0');
    console.log("----------------------------------");
    console.clear();
    console.log("----------------------------------");
    delta = eq_b * eq_b - 4 * eq_a * eq_c;
    console.log("O valor de delta é: ", delta);
    console.log("----------------------------------");
    if (delta < 0) {
        console.log("Não existem raízes reais da função");
        console.log();
    }
    else {
        raiz = delta / 2;
        rdelta = raiz;
        while (raiz > precisao) {
            nraiz = (raiz + delta / raiz) / 2;
            if ((raiz - nraiz) < precisao) {
                raiz = nraiz;
                break;
            }
            raiz = nraiz;
            rdelta = raiz;
        }
        rdelta = raiz;
        R1 = ((-eq_b) + (rdelta)) / (2 * eq_a);
        R2 = ((-eq_b) - (rdelta)) / (2 * eq_a);
        console.log("----------------------------------");
        console.log("A raiz x' é: ", R1.toFixed(2));
        console.log();
        console.log("A raiz x'' é: ", R2.toFixed(2));
        console.log("----------------------------------");
        console.log();
    }
}
exports.funcaoSegundoGrau = funcaoSegundoGrau;
