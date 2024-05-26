import promptSync from 'prompt-sync';

const prompt = promptSync();

export function funcaoSegundoGrau(): void{
let eq_a: number, eq_b: number, eq_c: number;
let delta: number, R1: number, R2: number, rdelta: number, precisao: number, raiz: number, nraiz: number;

// a precisão define a quantidade de casas decimais que a raiz será decomposta
precisao = 0.000001;

    // mensagem para o usuário identificar os valores
    console.log("");
    console.log("========== FUNÇÃO DE SEGUNDO GRAU ==========");
    console.log("");
    console.log("Identifique os valores da função:");
    console.log("f(x) = A.x^2 + B.x + C ");
    console.log();

    // entrada dos valores da função
    console.log("-----------------------------------");
    eq_a = parseFloat(prompt("Entre com o valor de A: ") || '0');
    eq_b = parseFloat(prompt("Entre com o valor de B: ") || '0');
    eq_c = parseFloat(prompt("Entre com o valor de C: ") || '0');
    console.log("----------------------------------");

    console.clear();

    // cálculo do valor de delta
    console.log("----------------------------------");
    delta = eq_b * eq_b - 4 * eq_a * eq_c;
    console.log("O valor de delta é: ", delta);
    console.log("----------------------------------");

    // cálculo das raízes da função
    if (delta < 0) {
        console.log("Não existem raízes reais da função");
        console.log();
    } else {
        // para calcular a raiz quadrada utilizamos o método de média aproximada
        // para começar decompomos a raiz por 2
        raiz = delta / 2;
        rdelta = raiz; // Inicializar rdelta como raiz no começo

        // procedimento de decomposição da raiz
        while (raiz > precisao) {
            nraiz = (raiz + delta / raiz) / 2;
            if ((raiz - nraiz) < precisao) {
                raiz = nraiz;
                // assim que a raiz for decomposta até a casa decimal definida
                // precisão, interrompemos o processo
                break;
            }
            // definimos o valor de raiz de delta!
            raiz = nraiz;
            rdelta = raiz;
        }

        rdelta = raiz
        R1 = ((-eq_b) + (rdelta)) / (2 * eq_a);
        R2 = ((-eq_b) - (rdelta)) / (2 * eq_a);
        console.log("----------------------------------");
        console.log("A raiz x' é: ", R1.toFixed(2));
        console.log();
        console.log("A raiz x'' é: ", R2.toFixed(2));
        console.log("----------------------------------");
        console.log();
    }
}