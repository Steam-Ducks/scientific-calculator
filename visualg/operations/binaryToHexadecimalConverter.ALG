Algoritmo "Conversor Binario para hexadecimal"

Var

    potencia, index, num_digitos, decimal: inteiro
    hexadecimal, binario: caractere

Inicio

    // Variaveis recebem valor 0
    decimal <- 0
    potencia <- 0
    num_digitos <- 0
    hexadecimal <- ""

    //Recebe o valor Binario a ser convertido em Hexadecimal
    escreva("Digite um numero binario para converter: ")
    leia(binario)

    num_digitos <- compr(binario)

    // Começamos pelo ultimo digito binario.
    para index <- num_digitos ate 1 passo -1 faca

        // Quando o caractere atual for '1', somamos ele elevado a  potencia atual.
        se copia(binario, index, 1) = "1" entao
            decimal <- int(decimal + (2 ^ potencia))
        fimse

        // Incrementa a potencia para a proxima iteraçãoo.
        potencia <- potencia + 1

        // A cada 4 digitos binarios ou no ultimo digito, convertemos para hexadecimal.
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

            // Reinicia variaveis para o proximo grupo de 4 digitos.
            decimal <- 0
            potencia <- 0
        fimse

    fimpara
    //Mostra o valor convertido de Binario para Hexadecimal
    escreval("O numero binario ", binario, " em hexadecimal é: ", hexadecimal)
Fimalgoritmo