    const promptSync = require('prompt-sync');

    const promp = promptSync();

//export function converterBinarioparaOctal(): void {

    console.log("");
    console.log("========== Conversão B2 x B8 ==========");
    console.log("");

    //========================= Solicita binario =================================

    let valido ="Invalido"
    let binario = ""

    do{

            binario = promp("Digite um numero binario para converter: ");
            console.log()

            // Verifica se tem "." ou "," no binario digitado por usuario
            let pontouvirgula = binario.includes(".") || binario.includes(",");
            if (pontouvirgula) {
                valido ="Invalido";
            } else {
            
                for (let index = 0; index < binario.length; index++)
                {
                    let letraAtual = binario[index];
                    // caso a letra não seja 1 ou 0, então o input não pode ser marcado como binário
                    if (letraAtual !== "1" && letraAtual !== "0") 
                    {
                        valido ="Invalido";
                    }

                    if (letraAtual === "1" || letraAtual === "0") 
                        {
                            valido ="valido";
                        }
                }
            }
                // Se for invalido, vai informar que que está invalido e reperit o numero
                if (valido == "Invalido") 
                    {
                        console.log("Binario Invalido.");
                                        }     
    } while (`${valido}` === "Invalido");

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
        
        function reverseString(str=""){
            return str.split("").reverse().join("");
        }
        console.log("Resultado: ")
        console.log("Binario: ",`${binario}` );
        console.log("Octal: ", reverseString(Resul));
        //}

