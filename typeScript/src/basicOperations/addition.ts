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
            valor = numeroValido(`${soma.toFixed(2)} + `);
        }

        soma += valor;
    }
    console.log();
    console.log(`O resultado da soma é: ${soma.toFixed(2)}`);
    console.log();

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