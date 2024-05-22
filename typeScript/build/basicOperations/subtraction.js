"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtration = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function subtration() {
    console.log();
    const quantidade = parseInt(prompt("Quantos números deseja subtrair? "));
    console.log();
    let subtration = 0;
    for (let i = 0; i < quantidade; i++) {
        const num = parseFloat(prompt(`Digite o número ${i - 1}: `));
        subtration -= num;
    }
    console.log();
    console.log(`O resultado da subtração é: ${subtration}`);
    console.log();
}
exports.subtration = subtration;
subtration();
