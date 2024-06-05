import promptSync = require("prompt-sync");

const prompt = promptSync();

export function fatorial(): void {
    let x: number;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    
    // Loop até que um número válido seja inserido
    do {
        let input: string = prompt("Escreva um número: ");
        x = parseFloat(input);

        // Verifica se a entrada não é um número
        if (isNaN(x)) {
            console.log("Por favor, insira um número válido.");
        }
    } while (isNaN(x)); // Continua pedindo entrada até que um número seja inserido

    let n = x;
    let resultado = 1;

    if (n < 0) {
        console.log("Escreva um número maior ou igual a 0")
    } else {
        if (n === 0) { }
        else {
            if (n === 1) { }
            else {
                if (n >= 2) {
                    while (n >= 1) {
                        resultado *= n;
                        while (n >= 2) {
                            console.log(n, "x")
                        }
                        n--;
                    }
                }
            }

        }
    }
    console.log(`O fatorial de ${x} é ${resultado}.`);
}
