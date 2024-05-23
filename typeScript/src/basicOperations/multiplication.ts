import  promptSync from 'prompt-sync';

const prompt = promptSync();

function multiplicacao() {
  let repete = 1;

  while (repete === 1) {
    console.log("========== Função Multiplicação ==========");
    console.log();
    console.log("Insira os valores, e eles serão automaticamente multiplicados, ");
    console.log();
    console.log("para finalizar, pressione '=' ou multiplique por zero.");
    console.log();
    console.log("=============================================================");
    console.log();

    let valorAcumulado = 1.0;

    while (true) {
      let valorString = prompt(`Valor: ${valorAcumulado} * `);
      if (valorString === '=' || valorString === '0') {
        break;
      }

      let valor = parseFloat(valorString);
      if (isNaN(valor)) {
        console.log("Por favor, insira um número válido.");
        continue;
      }

      valorAcumulado *= valor;

      console.log(`Resultado: ${valorAcumulado}`);
      console.log();
    }

    console.log();
    console.log(`O Resultado da multiplicação é: ${valorAcumulado}`);
    console.log("=============================================================");
    console.log();

    repete = parseInt(prompt("Deseja calcular outro valor? \n1 <- Sim\n2 <- Não\nResposta: "));
    console.log("=============================================================");
    console.log("");

    if (repete !== 1) {
      console.log("Encerrando o programa...");
    }
  }
}

multiplicacao();

