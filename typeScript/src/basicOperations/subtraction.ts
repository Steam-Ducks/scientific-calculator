import promptSync = require("prompt-sync");

const prompt = promptSync();

export function subtraction(): void {
  let value: number = 0;
  let accumulatedValue: number = 0;

  console.log();
  const counter: number = parseInt(prompt("Quantos números deseja subtrair? "));

  accumulatedValue = 0;
  for (let i = 1; i <= counter; i++) {
    if (i === counter && accumulatedValue === 0) {
      console.log("Valor: ");
      process.stdout.write(`${accumulatedValue} - `);
      value = parseFloat(prompt(""));
      accumulatedValue -= value;
      break;
    }

    if (accumulatedValue === 0) {
      console.log();
      process.stdout.write("Valor: ");
      accumulatedValue = parseFloat(prompt(""));
    } else {
      console.log();
      console.log("Valor: ");
      process.stdout.write(`${accumulatedValue} - `);
      value = parseFloat(prompt(""));
    }

    accumulatedValue -= value;
  }

  console.log();
  console.log(`O resultado da subtração é: ${accumulatedValue}`);
}

subtraction();
