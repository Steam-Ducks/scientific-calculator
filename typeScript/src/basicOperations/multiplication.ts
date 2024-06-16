import promptSync = require("prompt-sync");

const prompt = require("prompt-sync")();

export function multiplication(): void {
  let value: number = 0;
  let accumulatedValue: number = 1;  // Inicializa com 1 para a multiplicação

  console.log("");
  console.log("========== MULTIPLICAÇÃO ==========");
  console.log("");

  let counter = 0;
  do {
    counter = parseInt(prompt("Quantos números deseja multiplicar? "));
    if (isNaN(counter) || counter <= 1) {
      console.log("Por favor, insira um número válido.");
      console.log("");
    }
  } while (isNaN(counter) || counter <= 1);

  for (let i = 1; i <= counter; i++) {
    if (i === counter && accumulatedValue === 1) {
      console.log("Informe um número: ");
      value = parseFloat(prompt(`${accumulatedValue} * `));
      while (isNaN(value)) {
        console.log("Por favor, insira um número válido.");
        value = parseFloat(prompt(`${accumulatedValue} * `));
      }
      accumulatedValue *= value;
      // Adicionando exibição do resultado parcial
      console.log(`Resultado parcial: ${accumulatedValue}`);
      break;
    }

    if (accumulatedValue === 1 && i === 1) {
      console.log();
      accumulatedValue = parseFloat(prompt("Valor: "));
      while (isNaN(accumulatedValue)) {
        console.log("Por favor, insira um número válido.");
        accumulatedValue = parseFloat(prompt("Valor: "));
      }
    } else {
      console.log();
      console.log("Valor: ");
      value = parseFloat(prompt(`${accumulatedValue} * `));
      while (isNaN(value)) {
        console.log("Por favor, insira um número válido.");
        value = parseFloat(prompt(`${accumulatedValue} * `));
      }
      accumulatedValue *= value;
    }
    // Adicionando exibição do resultado parcial
    console.log(`Resultado parcial: ${accumulatedValue}`);
  }

  console.log();
  const formattedValue = Number.isInteger(accumulatedValue)
    ? accumulatedValue.toFixed(0)
    : accumulatedValue.toFixed(2);
  console.log(`O resultado da multiplicação é: ${formattedValue}`);
}
