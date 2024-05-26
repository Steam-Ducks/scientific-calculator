const prompt = require('prompt-sync')();

export function divisao(): void {

    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");
    const quantidade = parseInt(prompt("Quantos números deseja dividir? "));
    console.log()

    if (isNaN(quantidade) || quantidade <= 1) {
        console.log("Por favor, insira um número válido de quantidades.");
        return;
      };

    let divisao = parseFloat(prompt(`Digite o 1º numero: `));

    if (isNaN(divisao) || divisao <= 0)  {
        console.log("Por favor, insira um número válido.");
        return;
      }

    for (let i = 1; i < quantidade; i++) {
        const numero = parseFloat(prompt(`Digite o ${i + 1}º numero: `));

        let valor = numero;
    if (isNaN(valor) || numero <= 0)  {
      console.log("Por favor, insira um número válido.");
      i--;
      continue;
    }

     divisao /= numero;
    }
    console.log()
    console.log(`O resultado da divisao é: ${divisao}`);
    console.log()
}