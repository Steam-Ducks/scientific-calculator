import promptSync from 'prompt-sync';

const prompt = promptSync();

export function subtration(): void {
    console.log()
    const quantidade = parseInt(prompt("Quantos números deseja subtrair? "));
    console.log()
    let subtration = 0;
    for (let i = 0; i < quantidade; i++) {
        const num = parseFloat(prompt(`Digite o número ${i - 1}: `));
        subtration += num;
    }
    console.log()
    console.log(`O resultado da subtração é: ${subtration}`);
    console.log()

}