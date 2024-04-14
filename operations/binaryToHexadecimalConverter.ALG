Algoritmo "Conversor Binario para hexadecimal"

Var

    potencia, index, num_digitos, decimal: inteiro
    binario: caractere
    hexadecimal: caractere

Inicio

    // Variaveis recebem valor 0
    decimal <- 0
    potencia <- 0
    num_digitos <- 0
    hexadecimal <- ""

    //Recebe o valor Binario a ser convertido em Hexadecimal
    escreva("Digite um número binário para converter: ")
    leia(binario)

    num_digitos <- compr(binario)

    // Começamos pelo último dígito binário.
    para index <- num_digitos ate 1 passo -1 faca

        // Quando o caractere atual for '1', somamos ele elevado à potência atual.
        se copia(binario, index, 1) = "1" entao
            decimal <- int(decimal + (2 ^ potencia))
        fimse

        // Incrementa a potência para a próxima iteração.
        potencia <- potencia + 1

        // A cada 4 dígitos binários ou no último dígito, convertemos para hexadecimal.
        se (potencia = 4) ou (index = 1) entao
            // Converte o decimal acumulado para hexadecimal.
            escolha decimal
            caso 0
            hexadecimal <- "0" + hexadecimal
            caso 1
            hexadecimal <- "1" + hexadecimal
            caso 2
            hexadecimal <- "2" + hexadecimal
            caso 3
            hexadecimal <- "3" + hexadecimal
            caso 4
            hexadecimal <- "4" + hexadecimal
            caso 5
            hexadecimal <- "5" + hexadecimal
            caso 6
            hexadecimal <- "6" + hexadecimal
            caso 7
            hexadecimal <- "7" + hexadecimal
            caso 8
            hexadecimal <- "8" + hexadecimal
            caso 9
            hexadecimal <- "9" + hexadecimal
            caso 10
            hexadecimal <- "A" + hexadecimal
            caso 11
            hexadecimal <- "B" + hexadecimal
            caso 12
            hexadecimal <- "C" + hexadecimal
            caso 13
            hexadecimal <- "D" + hexadecimal
            caso 14
            hexadecimal <- "E" + hexadecimal
            caso 15
            hexadecimal <- "F" + hexadecimal
            fimescolha

            // Reinicia variáveis para o próximo grupo de 4 dígitos.
            decimal <- 0
            potencia <- 0
        fimse

    fimpara
    //Mostra o valor convertido de Binario para Hexadecimal
    escreval("O número binário ", binario, " em hexadecimal é: ", hexadecimal)
Fimalgoritmo