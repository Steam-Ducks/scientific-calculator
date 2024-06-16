import promptSync from 'prompt-sync';

const prompt = promptSync();

export function soma(): void {
    console.log("");
    console.log("========== SOMA ==========");
    console.log("");
    
    let quantidade: number = numeroValido("Quantos números deseja somar? ", 1, false);
    console.log();
    
    let soma:number = 0;
    let valor: number = 0;
    for (let i: number = 0; i < quantidade; i++) {
        console.log();
        if (soma === 0)
        {
            valor = numeroValido("Valor: ");
        }
        else
        {
            let somaAtual: string = Number.isInteger(soma) ? soma.toFixed(0) : soma.toFixed(2);
            console.log("Valor: ");
            valor = numeroValido(`${somaAtual} + `);
        }

        soma += valor;
    }

    let somaFinal: string = Number.isInteger(soma) ? soma.toFixed(0) : soma.toFixed(2);

    console.log();
    console.log(`O resultado da soma é: ${somaFinal}`);

}
function numeroValido(texto: string, minimo: number = Number.MIN_SAFE_INTEGER, decimal: boolean = true): number {
    let numero: number;
    let regex: RegExp;
    decimal ? regex = /^-?\d+(\.\d+)?$/ : regex = /^-?\d+$/;
    while (true) {
        const entrada = prompt(texto);
        if (regex.test(entrada)) {
            numero = parseFloat(entrada);
            if (numero > minimo) {
                break;
            }
        }
        
        console.log("Por favor, insira um número válido.");
        console.log();
    }

    return numero;
}