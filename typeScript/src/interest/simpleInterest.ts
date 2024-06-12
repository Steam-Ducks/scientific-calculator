import promptSync from 'prompt-sync';

const input = promptSync();

export function simpleInterest(): void {
    console.log("");
    console.log("========== JUROS SIMPLES ==========");
    console.log("");

    const valor = parseFloat(input("Capital inicial: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    let taxa: number = parseFloat(input("Taxa de juros/Mensal: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    const tempo: number = parseInt(input("Tempo/Meses: "));
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
