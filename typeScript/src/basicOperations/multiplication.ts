import promptSync from 'prompt-sync';

// Função principal para executar a calculadora de multiplicação
function calculadora(): void {
    const prompt = promptSync(); // Inicializa o prompt-sync
    let acVal: number = 1;
    let continuar = true;

    console.log("========== Multiplicação ==========");
    console.log("Pressione 'F' para finalizar a operação");

    while (continuar) {
        console.log();
        const valStr: string = prompt("Valor: ");

        if (valStr.toLowerCase() === 'f') {
            continuar = false;
            break;
        }

        const val: number = parseInt(valStr, 10);

        if (isNaN(val)) {
            console.log("Entrada inválida, por favor insira um número.");
            continue;
        }

        const acValStr: number = acVal;
        acVal = acVal * val;

        console.log(`Resultado: ${acValStr} X ${val} = ${acVal}`);
    }

    console.log(`Operação finalizada. Resultado final: ${acVal}`);
}

// Chama a função principal para iniciar a calculadora
calculadora();
