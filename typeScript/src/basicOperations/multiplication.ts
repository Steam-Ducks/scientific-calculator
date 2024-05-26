import promptSync from 'prompt-sync';

const prompt = promptSync();

export function multiplicacao() {
  console.log("");
  console.log("========== MULTIPLICAÇÃO ==========");
  console.log("");
  console.log("Insira os valores, e eles serão automaticamente multiplicados.");
  console.log();
  console.log("=============================================================");
  console.log();

  let valorAcumulado = 1.0;
  const quantidade = parseInt(prompt("Quantos números deseja multiplicar? "), 10);

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, insira um número válido de quantidades.");
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    let valorString = prompt(`Valor ${i + 1}: `);
    
    let valor = parseFloat(valorString);
    if (isNaN(valor)) {
      console.log("Por favor, insira um número válido.");
      i--;
      continue;
    }

    valorAcumulado *= valor;
    console.log(`Resultado parcial: ${valorAcumulado}`);
    console.log();
  }

  console.log();
  console.log(`O Resultado da multiplicação é: ${valorAcumulado}`);
  console.log("=============================================================");
  console.log();
}
