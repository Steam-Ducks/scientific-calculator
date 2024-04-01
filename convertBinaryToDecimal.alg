algoritmo "convert binary to decimal"

//Para converter de binário para decimal precisamos somar a os numeros elevados ao seu index
//A sequencia binaria se da assim: 
// 2^8 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0

//um numero binário consiste de 0s e 1s
//sendo assim uma sequencia pode ser 101101

//então utilizamos estes está sequência para multiplicar com a sequência binária

// 1 x 2^0 = 1
// 0 x 2^1 = 0
// 1 x 2^2 = 4
// 1 x 2^3 = 8
// 0 x 2^4 = 0
// 1 x 2^5 = 32
//    soma = 45

//Então o binário 101101 = 45


// Referência: https://www.cuemath.com/numbers/binary-to-decimal/


var

    decimal, potencia, index: inteiro
    binario: caractere

inicio

    decimal <- 0
    potencia <- 0

    escreva("Digite um número binário para converter: ")
    leia(binario)

    //Começamos pelo último numero binário. compr() retorna o tamanho de um texto
    //subtraímos 1 para que o numero não ultrapasse o index do texto.
    para index <- compr(binario) - 1 ate 0 passo -1 faca
            // quando o caracter atual for 1, então vamos somar ele elevado a potencia atual
            se binario[index] = "1" entao
                decimal <- (decimal + (2 ^ potencia))
            fimse
            
            //aumentamos em 1 a potencia para utilizar na proxima iteração do loop
            potencia <- potencia + 1
        fimpara

    //ao fim do loop, teremos todos os numeros somados na variavel decimal, que vera representar corretamente a conversao
    


    escreval ("O número decimal é: " + decimal)

fimalgoritmo