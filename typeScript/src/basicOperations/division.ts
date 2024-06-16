import promptSync from 'prompt-sync';
const prompt = promptSync();

export function divisao(): void {
    console.log("");
    
    console.log("═════════════════════════════════════");
    console.log("               DIVISÃO               ");
    console.log("");

    //==================================================================================
    // Declara as variáveis com tipos
    let num: string = "";
    let validInput: boolean;
    let quantidade: number = 0;

    do {
        num = prompt("Quantos números deseja dividir? ");
        
        validInput = /^\d+$/.test(num); // Verifica se a entrada contém apenas dígitos

        quantidade = parseInt(num);

        // Checa se o número é maior que 1 e se a entrada é válida (somente números)
        if (!validInput || isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);

    //==================================================================================
    // Recebe o número dividendo
    let dividendo: number = 0;

    do {
        num = prompt(`Valor: `);
        validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos

        dividendo = parseFloat(num);
        dividendo = parseFloat(dividendo.toFixed(2));

        // Checa se o número é válido (somente números)
        if (!validInput || isNaN(dividendo)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (!validInput || isNaN(dividendo));

    //==================================================================================
    // Recebe os divisores
    let divisor: number = 0;

    for (let i = 1; i < quantidade;) {
        do {
            i++;
            console.log();
            console.log('Valor:');
            num = prompt(`${dividendo} / `);

            validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos

            divisor = parseFloat(num);
            divisor = parseFloat(divisor.toFixed(2));

            // Checa se o número é válido e se não está sendo dividido por 0
            if (!validInput || isNaN(divisor) || divisor <= 0) {
                console.log("Por favor, insira um número válido.");
                console.log("");
                i--;
            }
        } while (!validInput || isNaN(divisor) || divisor <= 0);

        // Realiza a operação
        dividendo /= divisor;
        dividendo = parseFloat(dividendo.toFixed(2));
    }

    const resul: number = parseFloat(dividendo.toFixed(2));

    // Exibe o resultado
    console.log();
    console.log(`O resultado da divisao é: ${resul}`);
    console.log("═════════════════════════════════════");

}
