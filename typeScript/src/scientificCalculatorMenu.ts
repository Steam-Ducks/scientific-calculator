import promptSync from 'prompt-sync';

const prompt = promptSync();

let opcao: string;

do {
    console.clear();
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(":                CALCULADORA CIENTIFICA                :");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log();
    console.log("Digite a função que deseja utilizar:");
    console.log();
    console.log("[1] SOMA");
    console.log("[2] SUBTRAÇÃO");
    console.log("[3] MULTIPLICAÇÃO");
    console.log("[4] DIVISÃO");
    console.log("[5] SAIR");
    console.log();
    opcao = prompt("Opção desejada: ");

    switch (opcao) {
        case '1':
            do {
                soma();
            } while (repetirOperacao());
            break;
        case '2':
            do {
                soma();
            } while (repetirOperacao());
            break;
        case '3':
            do {
                soma();
            } while (repetirOperacao());
            break;
        case '4':
            do {
                soma();
            } while (repetirOperacao());
            break;
        case '5':
            console.log("PROGRAMA ENCERRADO!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }

    if (opcao !== '5') {
        prompt("Pressione Enter para continuar...");
    }

} while (opcao !== '5');

function repetirOperacao(): boolean {
    const resposta = prompt("Deseja repetir a mesma operação? (S/N): ");
    console.log()
    return resposta.toUpperCase() === 'S';
}

function soma(): void {
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

