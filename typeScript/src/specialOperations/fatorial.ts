import promptSync = require("prompt-sync");

const prompt = promptSync();

export function fatorial(): void {
  let value: number;
  console.log("");
  console.log("═════════════════════════════════════");
  console.log("          CÁLCULO FATORIAL           ");
  console.log("");

  do {
    let input: string = prompt("Valor: ");
    value = parseFloat(input);

    if (isNaN(value) || value < 0 || value % 1 !== 0) {
      console.log("Por favor, insira um número válido.");
    }
  } while (isNaN(value) || value < 0 || value % 1 !== 0);

  let holder = value;
  let resultado = 1;

  if (holder > -1) {
    if (holder === 0) {
    } else {
      if (holder === 1) {
      } else {
        if (holder >= 2) {
          while (holder >= 1) {
            resultado *= holder;
            holder--;
          }
        }
      }
    }
    console.log(`O fatorial de ${value} é ${resultado}.`);
    console.log("═════════════════════════════════════");
  }
}
