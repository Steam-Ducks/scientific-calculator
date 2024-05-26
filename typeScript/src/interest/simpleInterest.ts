import promptSync from 'prompt-sync';

const input = promptSync();

export function simpleInterest(): void {
    console.log("");
    console.log("========== JUROS SIMPLES ==========");
    console.log("");

    const valor = parseFloat(input("Digite o valor do empréstimo ou investimento: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }

    let taxa = parseFloat(input("Digite a porcentagem da taxa: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }

    const tempo = parseInt(input("Por último, informe o tempo decorrido em anos: "), 10);
    if (isNaN(tempo) || tempo <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }

    console.log("");

    taxa = taxa / 100;

    const juros = valor * taxa * tempo;

    console.log("O valor de juros é de:", juros);
    console.log("");
    console.log("====================================");
}
