const prompt = require('prompt-sync')();

export function multiplicacao(): void {

    console.log("");
    console.log("========== MULTIPLICAÇÃO ==========");
    console.log("");

    //==================================================================================
    // Declara a variável de quantidade
    let quantidade = 0;
    do {
        quantidade = parseInt(prompt("Quantos números deseja multiplicar? "));
        // Checa se o número é maior que 1
        if (isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
        // Aqui está a regra de ser maior ou igual a 1. Não dá para multiplicar menos de dois números
    } while (isNaN(quantidade) || quantidade <= 1);
  
    //==================================================================================
    // Recebe o primeiro número
    let multiplicacao = 1; // Inicializa com 1 porque é o elemento neutro da multiplicação
    let numero = 0;
    for (let i = 0; i < quantidade; i++) {
        do {
            numero = parseFloat(prompt(`Valor ${i + 1}: `));
            if (isNaN(numero)) {
                console.log("Por favor, insira um número válido.");
                console.log("");
            }
            // Aqui está a regra de ser um número
        } while (isNaN(numero));

        // Realiza a operação
        multiplicacao *= numero;
    }

    // Exibe o resultado
    console.log();
    console.log(`O resultado da multiplicação é: ${multiplicacao}`);
    console.log();
}

// Executar a função de multiplicação
multiplicacao();



