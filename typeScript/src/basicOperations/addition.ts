import promptSync from 'prompt-sync';

const prompt = promptSync();

export function soma(): void {
    console.log("");
    console.log("========== SOMA ==========");
    console.log("");
    let quantidade: number = numeroValido("Quantos números deseja somar? ", 0);
    console.log()
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {  
        soma += numeroValido(`Valor ${i + 1}: `);
    }
    console.log()
    console.log(`O resultado da soma é: ${soma}`);
    console.log()

}
function numeroValido(texto: string, minimo: number = Number.MIN_SAFE_INTEGER): number {
    let numero: number;
    while (true) {
        numero = parseInt(prompt(texto));
        if (!isNaN(numero) && numero > minimo)
        {
            break;
        }
        console.log("Por favor, insira um número válido.")
        console.log();
    }

    return numero;
}