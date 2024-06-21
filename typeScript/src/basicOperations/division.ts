import promptSync from 'prompt-sync'; // Importa o módulo prompt-sync
const prompt = promptSync(); // Cria uma instância de prompt-sync

export function divisao(): void {
    console.log("");
    
    console.log("═════════════════════════════════════");
    console.log("               DIVISÃO               ");
    console.log("");

    //==================================================================================
    // Declara as variáveis com tipos
    let num: string = ""; // Variável para armazenar a entrada do usuário
    let validInput: boolean; // Variável para verificar se a entrada é válida
    let quantidade: number = 0; // Variável para armazenar a quantidade de números a dividir

    do {
        num = prompt("Quantos números deseja dividir? "); // Solicita a quantidade de números ao usuário
        
        validInput = /^\d+$/.test(num); // Verifica se a entrada contém apenas dígitos

        quantidade = parseInt(num); // Converte a entrada para um número

        // Checa se o número é maior que 1 e se a entrada é válida (somente números)
        if (!validInput || isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);

    //==================================================================================
    // Recebe o número dividendo
    let dividendo: number = 0; // Variável para armazenar o dividendo

    do {
        num = prompt(`Valor: `); // Solicita o número do dividendo
        validInput = /^-?\d*\.?\d+$/.test(num); // Verifica se a entrada é um número
        dividendo = parseFloat(num); // Converte a entrada para um número de ponto flutuante
        dividendo = parseFloat(dividendo.toFixed(2)); // Fixa a precisão do número

        // Checa se o número é válido (somente números)
        if (!validInput || isNaN(dividendo)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(dividendo));

    //==================================================================================
    // Recebe os divisores
    let divisor: number = 0; // Variável para armazenar os divisores

    for (let i = 1; i < quantidade;) {
        do {
            i++;
            console.log();
            console.log('Valor:');
            num = prompt(`${dividendo} / `); // Solicita o divisor
            validInput = /^-?\d*\.?\d+$/.test(num); // Verifica se a entrada é um número
            divisor = parseFloat(num); // Converte a entrada para um número de ponto flutuante
            divisor = parseFloat(divisor.toFixed(2)); // Fixa a precisão do número
            if (!validInput || isNaN(divisor) || divisor == 0) {
                console.log("Por favor, insira um número válido.");
                console.log("");
                i--;
            }
        } while (!validInput || isNaN(divisor) || divisor == 0);

        // Realiza a operação de divisão
        dividendo /= divisor;
        dividendo = parseFloat(dividendo.toFixed(2)); // Fixa a precisão do resultado da divisão
    }

    const resul: number = parseFloat(dividendo.toFixed(2)); // Fixa a precisão final do resultado

    // Exibe o resultado da divisão
    console.log();
    console.log(`O resultado da divisão é: ${resul}`);
    console.log("═════════════════════════════════════");
}
