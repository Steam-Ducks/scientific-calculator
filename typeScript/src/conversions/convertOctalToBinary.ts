    const promptSync = require('prompt-sync');

    const promp = promptSync();

export function converterOctalparaBinario(): void {

    console.log("");
    console.log("═════════════════════════════════════");
    console.log("      CONVERSÃO OCTAL X BINÁRIO      ");
    console.log("");

    //========================= Solicita Octal =================================

    let valido ="Invalido"
    let octal = ""

    do{

            octal = promp("Digite um numero octal para converter: ");
            console.log()

            // Verifica se tem "." ou "," no octal digitado por usuario
            let pontouvirgula = octal.includes(".") || octal.includes(",");
            if (pontouvirgula) {
                valido ="Invalido";
            } else {
            
            for (let index = 0; index < octal.length; index++)
                {
                    let letraAtual = octal[index];
                    // caso a letra for menor que 0 e maior que 7, então o input não pode ser marcado como octal
                    (letraAtual !== "0" && letraAtual !== "1" && letraAtual !== "2" && letraAtual !== "3" && letraAtual !== "4" && letraAtual !== "5" && letraAtual !== "6" && letraAtual !== "7") 
                    {
                        valido ="Invalido";
                    }

                    if (letraAtual === "0" || letraAtual === "1" || letraAtual === "2" || letraAtual === "3" || letraAtual === "4" || letraAtual === "5" || letraAtual === "6" || letraAtual === "7") 
                        {
                            valido ="valido";
                        }
                // Se for invalido, vai informar que que está invalido e reperit o numero
                if (valido == "Invalido") 
                    {
                        console.log("Octal Invalido.");
                        break
                    }
                }
                }

// Vai ficar pedindo um numero octal novo até que seja válido
    } while (`${valido}` === "Invalido");

    let potencia = 0
    let decimal = 0
    let Resul= ""

    if(octal)
    {
        for (let index = octal.length - 1; index >= 0; index--)
        {
            let digito = parseInt(octal[index]);
            decimal += digito * (8 ** potencia);

                // Aumentamos em 1 a potência para utilizar na próxima iteração do loop.
                potencia++;
        }
        // Ao fim do loop, teremos todos os números somados na variável 'decimal',
       
        //Apos converter o numero para decimal, convertemos ele para binario
       do {
        //Para isso, fazemos a divisao inteira do numero decimal e guardamos o resto        
        let binario = decimal % 2;
        decimal = Math.floor(decimal /= 2);
        Resul += binario.toString();
            }
        while (decimal > 0);
    }
    
        // O resultado é o numero inverso, a função a baixo separa cada caracter e as reune de forma inversa
        
        function reverseString(str=""){
            return str.split("").reverse().join("");
        }
        console.log("Resultado: ")
        console.log("Octal:",`${octal}` );
        console.log("Binario:", reverseString(Resul));
}

