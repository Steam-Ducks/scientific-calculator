import promptSync = require("prompt-sync");

const prompt = promptSync();

export function multiplication(): void {
    let value: number = 0;
    let accumulatedValue: number = 1; // Inicializamos com 1 porque é o elemento neutro da multiplicação

    console.log("");
    console.log("========== MULTIPLICAÇÃO ==========");
    console.log("");
    const counter: number = parseInt(prompt("Quantos números deseja multiplicar? "));

    if (isNaN(counter) || counter <= 0) {
        console.log("Por favor, insira um número válido de quantidades.");
        return;
    }

    for (let i = 1; i <= counter; i++) {
        console.log();
        value = parseFloat(prompt(`Valor ${i}: `));
        if (isNaN(value)) {
            console.log("Por favor, insira um número válido.");
            i--;
            continue;
        }
        accumulatedValue *= value;
    }

    console.log();
    const formattedValue = accumulatedValue.toFixed(2);
    console.log(`O resultado da multiplicação é: ${formattedValue}`);
}

// Executar a função de multiplicação
multiplication();
}
