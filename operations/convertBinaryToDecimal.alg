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
    valido: logico
    letraAtual: caractere

inicio
    decimal <- 0
    potencia <- 0
    valido <- falso

// Validar input ----------------------------------------------------------------------------------------------

// Input comeca como invalido é perguntado repetidademente até que um input valido seja fornecido
    enquanto valido = falso faca
        valido <- verdadeiro // assumimos que o input sera valido
        escreva("Digite um número binário para converter: ")
        leia(binario)

        // Percorremos o input letra a letra
        para index <- 1 ate compr(binario) faca
            letraAtual <- copia(binario, index, 1)
            //caso a letra nao seja 1 ou 0, entao o input nao pode ser marcado como binario
            se (letraAtual <> "1") e (letraAtual <> "0") entao
                valido <- falso
            fimse
        fimpara
        se valido = falso entao
            escreval("Binario invalido!")
        fimse
    fimenquanto


// converter base -----------------------------------------------------------------------------------------------

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