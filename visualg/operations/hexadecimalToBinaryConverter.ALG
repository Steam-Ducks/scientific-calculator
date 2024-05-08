Algoritmo "Conversor Hexadecimal para Binario"

Var

    hexadecimal, parte_hexadecimal, binario: caractere
    num_digitos, index: inteiro

Inicio

   // Coleta o numero Hexadecimal
    escreva("Digite um numero Hexadecimal:")
    leia(hexadecimal)
    binario <- ""
    num_digitos <- compr(hexadecimal)

    // Loop para percorrer cada digito hexadecimal.
    para index <- 1 ate num_digitos faca
        // Obtem o caractere hexadecimal atual.
        parte_hexadecimal <- copia(hexadecimal, index, 1)

        // Converte o caractere hexadecimal para inteiro.
        escolha parte_hexadecimal
            caso "0"
            binario <- binario + "0000"
            caso "1"
            binario <- binario + "0001"
            caso "2"
            binario <- binario + "0010"
            caso "3"
            binario <- binario + "0011"
            caso "4"
            binario <- binario + "0100"
            caso "5"
            binario <- binario + "0101"
            caso "6"
            binario <- binario + "0110"
            caso "7"
            binario <- binario + "0111"
            caso "8"
            binario <- binario + "1000"
            caso "9"
            binario <- binario + "1001"
        fimescolha

        se (parte_hexadecimal = "A") ou (parte_hexadecimal = "a") entao
            binario <- binario + "1010"
        fimse
        se (parte_hexadecimal = "B") ou (parte_hexadecimal = "b") entao
            binario <- binario + "1011"
        fimse
        se (parte_hexadecimal = "C") ou (parte_hexadecimal = "c") entao
            binario <- binario + "1100"
        fimse
        se (parte_hexadecimal = "D") ou (parte_hexadecimal = "d") entao
            binario <- binario + "1101"
        fimse
        se (parte_hexadecimal = "E") ou (parte_hexadecimal = "e") entao
            binario <- binario + "1110"
        fimse
        se (parte_hexadecimal = "F") ou (parte_hexadecimal = "f") entao
            binario <- binario + "1111"
        fimse

    fimpara
    // Mostra o resultado da conversao
    escreval("O numero hexadecimal ", hexadecimal, " em binario é: ", caracpnum(binario))

Fimalgoritmo