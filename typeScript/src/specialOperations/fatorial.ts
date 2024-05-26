import promptSync = require("prompt-sync");

const prompt = promptSync();

export function fatorial(): void {
    let x : number;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    x = parseFloat(prompt("Escreva um número: "));

    let n = x;
    let resultado = 1;

    if (n >= 0) {
        while (n >= 1) {
                resultado *= n;
                n--;
            }
    }
    console.log(`O fatorial de ${x} é ${resultado}.`);

}