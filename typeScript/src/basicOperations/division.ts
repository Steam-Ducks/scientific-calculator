const prompt = require('prompt-sync')();

    console.log()
    const quantidade = parseInt(prompt("Quantos números deseja dividir? "));
    console.log()
    let divisao = parseFloat(prompt(`Digite o 1º numero: `));
    for (let i = 1; i < quantidade; i++) {
        const numero = parseFloat(prompt(`Digite o ${i + 1}º numero: `));
     divisao /= numero;
    }
    console.log()
    console.log(`O resultado da divisao é: ${divisao}`);
    console.log()

