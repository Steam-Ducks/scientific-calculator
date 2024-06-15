import promptSync from 'prompt-sync';

const prompt = promptSync();

export function simpleInterest(): void {
    console.log("");
    console.log("========== JUROS SIMPLES ==========");
    console.log("");

    const valor: number = numeroValido("Capital inicial: ");

    let taxa: number = numeroValido("Taxa de juros/Mensal: ");

    const tempo: number = numeroValido("Tempo/Meses: ");

    console.log("");
    
    taxa = taxa / 100;

    const juros: number = valor * (taxa) * tempo;
    const montante: number = valor + juros;

    console.log(`Capital Inicial: R$${valor.toFixed(2)}`);
    console.log("")
    console.log(`Taxa de Juros: ${taxa*100}%`);
    console.log("")
    console.log(`Tempo: ${tempo} meses`);
    console.log("")
    console.log(`Montante: R$${montante.toFixed(2)}`);
    console.log("")
    console.log(`Total em Juros: R$${juros.toFixed(2)}`);
}

function numeroValido(texto: string): number {
    let numero: number;
    while (true) {
        const entrada = prompt(texto);

        if (/^-?\d+(\.\d+)?$/.test(entrada)) {
            numero = parseFloat(entrada);
            if (numero > 0) {
                break;
            }
        }
        
        console.log("Por favor, insira um número válido.");
        console.log();
    }
    return numero;
}
