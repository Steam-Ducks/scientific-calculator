import promptSync from "prompt-sync";

const prompt = promptSync();

export function funcaoSegundoGrau(): void {
  // a precisão define a quantidade de casas decimais que a raiz será decomposta
  const precisao: number = 0.000001;

  // mensagem para o usuário identificar os valores
  console.log("");
  console.log("═════════════════════════════════════");
  console.log("        FUNÇÃO DE SEGUNDO GRAU       ");
  console.log("");
  console.log("Identifique os valores da função:");
  console.log("f(x) = A.x^2 + B.x + C ");
  console.log();

  let eq_a: number;
  let eq_b: number;
  let eq_c: number;

  // entrada dos valores da função
  do {
    eq_a = parseFloat(prompt("Valor de A: "));
    eq_b = parseFloat(prompt("Valor de B: ") || "0");
    eq_c = parseFloat(prompt("Valor de C: ") || "0");

    // o menu força o usuário a inserir valores numericos nas 3 solicitações de valores
    if (isNaN(eq_a) || isNaN(eq_b) || isNaN(eq_c)) {
      console.log();
      console.log("Por favor, insira valores numéricos válidos.");
    }
    if (eq_a === 0) {
      console.log();
      console.log("A função é de segundo grau, insira um valor válido para A.");
    }
    console.log();
  } while (isNaN(eq_a) || isNaN(eq_b) || isNaN(eq_c) || eq_a === 0);

  // cálculo do valor de delta

  console.log("----------------------------------");
  let delta: number = eq_b * eq_b - 4 * eq_a * eq_c;
  console.log("Delta: ", delta);
  console.log("----------------------------------");

  // cálculo das raízes da função
  if (delta < 0) {
    console.log("Resultado: ");
    console.log("Não existem raízes reais da função.");
    console.log("═════════════════════════════════════");
    console.log();
  } else {
    // para calcular a raiz quadrada utilizamos o método de média aproximada
    // para começar decompomos a raiz por 2
    let raiz: number = delta / 2;
    let rdelta: number = raiz; // Inicializar rdelta como raiz no começo

    // procedimento de decomposição da raiz
    while (raiz > precisao) {
      let nraiz: number = (raiz + delta / raiz) / 2;
      if (raiz - nraiz < precisao) {
        raiz = nraiz;

        // assim que a raiz for decomposta até a casa decimal definida na precisão, interrompemos o processo
        break;
      }

      // definimos o valor de raiz de delta!
      raiz = nraiz;
      rdelta = raiz;
    }

    rdelta = raiz;
    const R1: number = (-eq_b + rdelta) / (2 * eq_a);
    const R2: number = (-eq_b - rdelta) / (2 * eq_a);
    console.log("Resultado: ");
    console.log("x': ", R1.toFixed(2));
    console.log("x'': ", R2.toFixed(2));
    console.log("═════════════════════════════════════");
    console.log();
  }
}
