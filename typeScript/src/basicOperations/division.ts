const prompt = require('prompt-sync')();

export function divisao(): void {

    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");

 //==================================================================================
 // declara a variavel de quantidade
    let quantidade = 0;
    do {
      quantidade = parseInt(prompt("Quantos números deseja dividir? "));
 // checa se o nuero é maior que 1
      if (isNaN(quantidade) || quantidade <= 1) {
          console.log("Por favor, insira um número válido.");
      console.log("");
      }
 //aqui está a regra de ser maior ou igual a 1. Não da para dividir menos de dois numeros
  } while (isNaN(quantidade) || quantidade <= 1);
  
 //==================================================================================
 //Recebe o numero dividendo
      let divisao = 0 
      do {
      divisao = parseFloat(prompt(`Valor: `)); 
      if (isNaN(divisao)) {
        console.log("Por favor, insira um número válido.");
    console.log("");
    }
 //aqui está a regra de ser um numero
        } while (isNaN(divisao));

 //==================================================================================

 // Recebe os dividendos
    for (let i = 1; i < quantidade; i++) {

        const numero = parseFloat(prompt(`Valor: `));

 // Verifica se não está sendo dividido por 0
    if (isNaN(numero) || numero <= 0)  {
      console.log("Não é posspivel dividir por 0");
      console.log("Por favor, insira um número válido.");
      console.log("");
      i--;
      continue;
    }

 // Realiza a operação
     divisao /= numero;

 //fecha o loop
    }
 //Exibe o resultado
    console.log()
    console.log(`O resultado da divisao é: ${divisao}`);
    console.log()
}