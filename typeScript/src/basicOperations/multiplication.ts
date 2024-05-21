import promptSync from 'prompt-sync';

const prompt = promptSync();

// Função para multiplicar dois números
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função para obter entrada do usuário e validar
function obterNumero(mensagem: string): number {
    const input = prompt(mensagem);
    const numero = Number(input);

    if (isNaN(numero)) {
        throw new Error("Entrada inválida! Por favor, insira um número.");
    }

    return numero;
}

// Função principal para executar a calculadora
function calculadora(): void {
    let continuar = true;

    while (continuar) {
        try {
            const num1: number = obterNumero("Insira o primeiro número: ");
            const num2: number = obterNumero("Insira o segundo número: ");

            const resultado: number = multiplicar(num1, num2);
            console.log(`A multiplicação de ${num1} e ${num2} é: ${resultado}`);

            const resposta: string = prompt("Quer continuar? Sim ou Não: ").toLowerCase();

            if (resposta === "não" || resposta === "nao" || resposta === "n") {
                continuar = false;
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Executar a calculadora
calculadora();


