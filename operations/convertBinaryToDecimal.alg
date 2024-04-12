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


var
    potencia, index: inteiro
    decimal: inteiro
    binario: caractere

inicio
    decimal <- 0
    potencia <- 0

    escreva("Digite um número binário para converter: ")
    leia(binario)

    // Começamos pelo último número binário.
    // Compr() retorna o tamanho de um texto.
    // Subtraímos 1 para que o número não ultrapasse o índice do texto.
    para index <- compr(binario) ate 1 passo -1 faca

        // Quando o caractere atual for '1', somamos ele elevado à potência atual.
        se  copia(binario, index, 1) = "1" entao
            decimal <- int(decimal + (2 ^ potencia))
        fimse

        // Aumentamos em 1 a potência para utilizar na próxima iteração do loop.
        potencia <- potencia + 1
    fimpara

    // Ao fim do loop, teremos todos os números somados na variável 'decimal',
    // que irá representar corretamente a conversão.

    escreval("O número decimal é: ", decimal)
    escreval("")

fimalgoritmo