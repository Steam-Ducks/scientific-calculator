"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterOctalparaBinario = void 0;
const promptSync = require('prompt-sync');
const promp = promptSync();
function converterOctalparaBinario() {
    console.log("");
    console.log("========== Conversão Binaio para Octal ==========");
    console.log("");
    let valido = "Invalido";
    let binario = "";
    do {
        console.log();
        binario = promp("Digite um numero binario para converter ");
        console.log();
        for (let index = 0; index < binario.length; index++) {
            let letraAtual = binario[index];
            if (letraAtual !== "1" && letraAtual !== "0") {
                valido = "Invalido";
            }
            if (letraAtual === "1" || letraAtual === "0") {
                valido = "valido";
            }
        }
        if (valido == "Invalido") {
            console.log("Binario Invalido.");
        }
    } while (`${valido}` === "Invalido");
    let potencia = 0;
    let decimal = 0;
    let octal = 0;
    let Resul = "";
    if (binario) {
        for (let index = binario.length - 1; index >= 0; index--) {
            if (binario[index] === "1") {
                decimal += 2 ** potencia;
            }
            potencia++;
        }
        do {
            octal = Math.floor(decimal % 8);
            decimal /= 8;
            Resul += octal.toString();
        } while (decimal > 1);
    }
    function reverseString(str = "") {
        return str.split("").reverse().join("");
    }
    console.log("Resultados: ");
    console.log("Binario: ", `${binario}`);
    console.log("Octal: ", reverseString(Resul));
}
exports.converterOctalparaBinario = converterOctalparaBinario;
converterOctalparaBinario();
