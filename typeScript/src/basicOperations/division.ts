    const prompt = require('prompt-sync')();

export function divisao(): void {

    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");

    //==================================================================================
    // declara a variavel de quantidade
    let num="";
    let validInput;
    let quantidade = 0;
    do {
      num = prompt("Quantos números deseja dividir? ");
    // checa se o nuero é maior que 1
      
      validInput = /^\d+$/.test(num); // Verifica se a entrada contém apenas dígitos

    // Converte a quantidade para um número inteiro
      quantidade = parseInt(num);
      

    // Checa se o número é maior que 1 e se a entrada é válida (somente números)
       if (!validInput || isNaN(quantidade) || quantidade <= 1) {
        console.log("Por favor, insira um número válido.");
        console.log("");
      }
    // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(quantidade) || quantidade <= 1);
  
    //==================================================================================
    //Recebe o numero dividendo
      let dividendo=0;
      do {
         num = prompt(`Valor: `); 
      validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos

    // Converte a quantidade para um número inteiro
     dividendo = parseFloat(num)
     dividendo = parseFloat(dividendo.toFixed(2));

    // Checa se o número é maior que 1 e se a entrada é válida (somente números)
       if (!validInput || isNaN(dividendo)) {
        console.log("Por favor, insira um número válido.");
        console.log("");
      }
    // Aqui está a regra de ser maior ou igual a 1. Não dá para dividir menos de dois números
    } while (!validInput || isNaN(dividendo));

    //==================================================================================

    // Recebe os divisores
    let divisor=0;
   for (let i = 1; i < quantidade;) {

    do{
         i++
         console.log()
         console.log('Valor:')
         num = prompt(`${dividendo} / `);
         // Verifica se não está sendo dividido por 0
         validInput = /^[0-9]+(\.[0-9]+)?$/.test(num); // Verifica se a entrada contém apenas dígitos

         // Converte a quantidade para um número inteiro
         divisor = parseFloat(num)
         divisor = parseFloat(divisor.toFixed(2));

         // Checa se o número é maior que 1 e se a entrada é válida (somente números)
         if (!validInput || isNaN(divisor) || divisor <= 0) {
            console.log("Por favor, insira um número válido.");
            console.log("");
            i--;
         }
      } while (!validInput || isNaN(divisor) || divisor <= 0);  

    // Realiza a operação
    dividendo /= divisor;
    dividendo = parseFloat(dividendo.toFixed(2));
      
    //fecha o loop
    }

    let resul = dividendo;
    resul = parseFloat(resul.toFixed(2));

 //Exibe o resultado
    console.log()
    console.log(`O resultado da divisao é: ${resul}`);
    console.log()
}