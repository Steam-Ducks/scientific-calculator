import promptSync from 'prompt-sync';

const prompt = promptSync();

export function soma(): void {
    console.log()
    const quantidade = parseInt(prompt("Quantos números deseja somar? "));
    console.log()
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
        soma += numero;
    }
    console.log()
    console.log(`O resultado da soma é: ${soma}`);
    console.log()

}