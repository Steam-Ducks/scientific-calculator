    const promptSync = require('prompt-sync');
    const promp = promptSync();
    console.log()
    let binario = promp("Digite um numero binario para convertet ");
    console.log()

    let potencia = 0
    let decimal = 0
    let octal = 0
    let Resul= ""

    if(binario)
    {
        for (let index = binario.length - 1; index >= 0; index--)
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
       
        //Apos converter o numero para decimal, convertemos ele para octal
       do {

        //Para isso, fazemos a divisao inteira do numero decimal e guardamos o resto
        octal = Math.floor(decimal % 8);
        decimal /= 8;
        Resul += octal.toString();
            }
        while (decimal > 1);

    }
        // O resultado é o numero inverso, a função a baixo separa cada caracter e as reune de forma inversa
        
        function reverseString(str: string): string {
            return str.split("").reverse().join("");
        }

        console.log("O número octal é: ", reverseString(Resul));