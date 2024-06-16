import promptSync from 'prompt-sync';

const prompt = promptSync();

function binarioValido(): string {
    let valido: boolean = false;
    let binario: string = "";
    console.log("");
    console.log("═════════════════════════════════════");
    console.log("   CONVERSÃO BINÁRIO X HEXADECIMAL   ");
    while (!valido) {
        valido = true;
        console.log();
        binario = prompt("Digite um número binário para converter: ");
        if (binario) {
            // Percorre o input letra a letra
            for (let index: number = 0; index < binario.length; index++) {
                let letraAtual: string = binario[index];
                // caso o valor não seja 1 ou 0, gera a mensagem de erro
                if (letraAtual !== "1" && letraAtual !== "0") {
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
    return binario;
}

function binarioParaHexadecimal(binario: string): string {
    // Preenche o número binário com zeros à esquerda para que seu comprimento seja múltiplo de 4
    while (binario.length % 4 !== 0) {
        binario = "0" + binario;
    }

    let hexadecimal: string = "";
    const tabelaHexadecimal: { [key: string]: string } = {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "A",
        "1011": "B",
        "1100": "C",
        "1101": "D",
        "1110": "E",
        "1111": "F"
    };

    for (let i = 0; i < binario.length; i += 4) {
        let grupo: string = binario.substring(i, i + 4);
        hexadecimal += tabelaHexadecimal[grupo];
    }

    return hexadecimal;
}

export function converterBinarioParaHexadecimal(): void {
    let binario: string = binarioValido();
    let hexadecimal: string = binarioParaHexadecimal(binario);
    console.log("");
    console.log("Resultado:");
    console.log("Binário:", binario);
    console.log("Hexadecimal:", hexadecimal); 
    console.log("═════════════════════════════════════");

}

