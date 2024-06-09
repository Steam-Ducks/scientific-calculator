import promptSync from 'prompt-sync';

const prompt = promptSync();

function hexadecimalValido(): string {
    let valido: boolean = false;
    let hexadecimal: string = "";
    console.log("");
    console.log("========== Conversão B16 x B2 ==========");
    while (!valido) {
        valido = true;
        console.log();
        hexadecimal = prompt("Digite um número hexadecimal para converter: ");
        if (hexadecimal) {
            // Percorremos o input letra a letra
            for (let index: number = 0; index < hexadecimal.length; index++) {
                let letraAtual: string = hexadecimal[index].toUpperCase();
                // caso o valor não esteja entre 0-9 ou A-F, gera a mensagem de erro
                if (!/[0-9A-F]/.test(letraAtual)) {
                    valido = false;
                    break;
                }
            }
        }
        if (!valido) {
            console.log("")
            console.log("Por favor, insira um numero valido.");
        }
    }
    return hexadecimal.toUpperCase();
}

function hexadecimalParaBinario(hexadecimal: string): string {
    const tabelaBinario: { [key: string]: string } = {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0111",
        "8": "1000",
        "9": "1001",
        "A": "1010",
        "B": "1011",
        "C": "1100",
        "D": "1101",
        "E": "1110",
        "F": "1111"
    };

    let binario: string = "";
    for (let i = 0; i < hexadecimal.length; i++) {
        binario += tabelaBinario[hexadecimal[i]];
    }

    // Remove os zeros à esquerda pra obter a representação correta do binário
    binario = binario.replace(/^0+/, '');

    return binario.length > 0 ? binario : "0"; // Retorna "0" se a string for vazia
}

export function converterHexadecimalParaBinario(): void {
    let hexadecimal: string = hexadecimalValido();
    let binario: string = hexadecimalParaBinario(hexadecimal);
    console.log("");
    console.log("Resultado:");
    console.log("Hexadecimal:", hexadecimal);
    console.log("Binário:", binario);
}

