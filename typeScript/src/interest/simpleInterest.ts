import promptSync from 'prompt-sync';

const input = promptSync();

export function simpleInterest(): void {
    console.log("========== JUROS SIMPLES ==========");
    console.log("");

    const valor = parseFloat(input("Capital inicial: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    let taxa = parseFloat(input("Taxa de juros: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    const tempo = parseInt(input("Tempo (Em meses ou anos de acordo com a sua função original): "));
    console.log("");

    taxa = taxa / 100;

    const juros = valor * taxa * tempo;
    const montante = valor + juros;

    console.log("Capital inicial: ", valor);
    console.log("");
    console.log("Taxa de juros: ", taxa);
    console.log("");
    console.log("Tempo/meses: ", tempo);
    console.log("");
    console.log("Montante: R$", montante);
    console.log("");
    console.log("Total em juros: ", juros);
    console.log("====================================");
}
