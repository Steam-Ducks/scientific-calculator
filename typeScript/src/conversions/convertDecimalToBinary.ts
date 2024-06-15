import promptSync from 'prompt-sync';

const prompt = promptSync();

export function converterDecimalParaBinario(): void {
    console.log("");
    console.log("========== CONVERSÃO DECIMAL X BINÁRIO ==========");
    console.log();
    
    let binario: string = "";
    const numeroOriginal: number = numeroValido("Digite um número para converter: ", -1);
    let numero = numeroOriginal;

    if (numero === 0) {
        binario = "0";
    } else {
        // Iteramos enquanto o número for > 0
        while (numero > 0) {
            // Salvamos o resto da divisão por 2
            let resto: number = numero % 2;
            // Adicionamos o 1 ou 0 ao binário
            binario = resto.toString() + binario;
            // Dividimos o número por 2
            numero = Math.floor(numero / 2);
        }
    }
    
    console.log();
    console.log("Resultado:");
    console.log("Decimal: ", numeroOriginal);
    console.log("Binário:", binario);
}

function numeroValido(texto: string, minimo: number = Number.MIN_SAFE_INTEGER): number {
    let numero: number;
    while (true) {
        const entrada = prompt(texto);

        if (/^-?\d+$/.test(entrada)) {
            numero = parseInt(entrada);
            if (numero > minimo) {
                break;
            }
        }
        
        console.log("Por favor, insira um número válido.");
        console.log();
    }

    return numero;
}