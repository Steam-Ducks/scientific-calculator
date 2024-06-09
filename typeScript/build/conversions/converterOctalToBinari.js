"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterOctalparaBinario = void 0;
const promptSync = require('prompt-sync');
const promp = promptSync();
function converterOctalparaBinario() {
    console.log("");
    console.log("========== Conversão Octal para Binario ==========");
    console.log("");
    let valido = "Invalido";
    let octal = "";
    do {
        console.log();
        octal = promp("Digite um numero octal para converter ");
        console.log();
        for (let index = 0; index < octal.length; index++) {
            let letraAtual = octal[index];
            (letraAtual !== "0" && letraAtual !== "1" && letraAtual !== "2" && letraAtual !== "3" && letraAtual !== "4" && letraAtual !== "5" && letraAtual !== "6" && letraAtual !== "7");
            {
                valido = "Invalido";
            }
            if (letraAtual === "0" || letraAtual === "1" || letraAtual === "2" || letraAtual === "3" || letraAtual === "4" || letraAtual === "5" || letraAtual === "6" || letraAtual === "7") {
                valido = "valido";
            }
        }
        if (valido == "Invalido") {
            console.log("Octal Invalido.");
        }
    } while (`${valido}` === "Invalido");
    let potencia = 0;
    let decimal = 0;
    let Resul = "";
    if (octal) {
        for (let index = octal.length - 1; index >= 0; index--) {
            let digito = parseInt(octal[index]);
            decimal += digito * (8 ** potencia);
            potencia++;
        }
        do {
            let binario = decimal % 2;
            decimal = Math.floor(decimal /= 2);
            Resul += binario.toString();
        } while (decimal > 0);
    }
    function reverseString(str = "") {
        return str.split("").reverse().join("");
    }
    console.log("Resultados: ");
    console.log("Octal:", `${octal}`);
    console.log("Binario:", reverseString(Resul));
}
exports.converterOctalparaBinario = converterOctalparaBinario;
