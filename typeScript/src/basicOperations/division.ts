    const prompt = require('prompt-sync')();

export function divisao(): void {

    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");

    //==================================================================================
    // declara a variavel de quantidade
    let quantidade:character;
    let validInput;
    do {
      quantidade = prompt("Quantos números deseja dividir? ");
    // checa se o nuero é maior que 1
      
      validInput = /^\d+$/.test(quantidade); // Verifica se a entrada contém apenas dígitos

    // Converte a quantidade para um número inteiro
      quantidade = parseInt(quantidade);

    // Checa se o número é maior que 1 e se a entrada é válida (somente números)
       if (!validInput || isNaN(quantidade) || quantidade <= 1) {
        console.log("Por favor, insira um número válido.");
        console.log("");
      }
    // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);
  
    //==================================================================================
    //Recebe o numero dividendo
      let dividendo:character;
      do {
         dividendo = prompt(`Valor: `); 
      validInput = /^[0-9]+(\.[0-9]+)?$/.test(dividendo); // Verifica se a entrada contém apenas dígitos

    // Converte a quantidade para um número inteiro
      dividendo = parseFloat(dividendo);

    // Checa se o número é maior que 1 e se a entrada é válida (somente números)
       if (!validInput || isNaN(dividendo)) {
        console.log("Por favor, insira um número válido.");
        console.log("");
      }
    // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(dividendo));

    //==================================================================================

    // Recebe os divisores
    let divisor:character;
   for (let i = 1; i < quantidade;) {

    do{
         i++
         console.log()
         console.log('Valor:')
         divisor = prompt(`${dividendo} / `);
         // Verifica se não está sendo dividido por 0
         validInput = /^[0-9]+(\.[0-9]+)?$/.test(divisor); // Verifica se a entrada contém apenas dígitos

         // Converte a quantidade para um número inteiro
         divisor = parseFloat(divisor);

         // Checa se o número é maior que 1 e se a entrada é válida (somente números)
         if (!validInput || isNaN(divisor) || divisor <= 0) {
            console.log("Por favor, insira um número válido.");
            console.log("");
            i--;
         }
      } while (!validInput || isNaN(divisor) || divisor <= 0);  

    // Realiza a operação
    dividendo /= divisor;

    //fecha o loop
    }

 //Exibe o resultado
    console.log()
    console.log(`O resultado da divisao é: ${dividendo}`);
    console.log()
}