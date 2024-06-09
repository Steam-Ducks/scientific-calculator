"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenacaoStrings = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function somarStrings(string1, string2) {
    return `${string1} ${string2}`;
}
function concatenacaoStrings() {
    console.log("========== Concatenação de Strings ==========");
    console.log("");
    const string1 = prompt("Digite a primeira string: ");
    const string2 = prompt("Digite a segunda string: ");
    const resultado = somarStrings(string1, string2);
    console.log("");
    console.log("Resultado:", resultado);
}
exports.concatenacaoStrings = concatenacaoStrings;
