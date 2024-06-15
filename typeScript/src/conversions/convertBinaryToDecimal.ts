import promptSync from 'prompt-sync';

const prompt = promptSync();

function binarioValido(): string {
    let valido: boolean = false;
    let binario: string = "";
    while(!valido)
    {
        valido = true
        console.log()
        binario = prompt("Digite um numero binário para converter: ");
        if (binario)
        {
            // Percorremos o input letra a letra
            for (let index: number = 0; index < binario.length; index++)
            {
                let letraAtual: string = binario[index];
                // caso a letra não seja 1 ou 0, então o input não pode ser marcado como binário
                if (letraAtual !== "1" && letraAtual !== "0") 
                {
                    valido = false;
                    break;
                }
            }
        }
        if (!valido) 
        {
            console.log("Binario invalido!");
        }
    }
    return binario
    
}
export function converterBinarioParaDecimal(): void {

    let binario: string;
    let decimal: number = 0;
    let potencia: number = 0;
    console.log("");
    console.log("========== CONVERSÃO BINÁRIO X DECIMAL ==========");
    binario = binarioValido();
        


    // Converter base -----------------------------------------------------------------------------------------------
    // Começamos pelo último número binário.
    // Subtraímos 1 para que o número não ultrapasse o índice do texto.
    for (let index: number = binario.length - 1; index >= 0; index--)
    {
        // Quando o caractere atual for '1', somamos ele elevado à potência atual.
        if (binario[index] === "1")
        {
            decimal += 2 ** potencia;
        }
            // Aumentamos em 1 a potência para utilizar na próxima iteração do loop.
            potencia++;
        }

    // Ao fim do loop, teremos todos os números somados na variável 'decimal',
    // que irá representar corretamente a conversão.
    console.log()
    console.log("Resultado:")
    console.log("Binário: ", binario)
    console.log("Decimal: ", decimal);
}
