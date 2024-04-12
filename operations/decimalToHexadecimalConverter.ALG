Algoritmo "decimal para hexadecimal"
// Autor: Matheus Gabriel Barbosa Leite
Var

   decimal, resto, i, j: inteiro
   hexadecimal: vetor[0..16] de inteiro

Inicio

    escreval("======== Conversor de Decimal para Hexadecimal ========")
    escreva("Digite um número decimal: ")
    leia(decimal)

    // converte o número decimal para hexadecimal
    enquanto decimal > 0 faca
        resto <- decimal % 16
        decimal <- decimal DIV 16
        hexadecimal[i] <- resto
        i <- i + 1
    fimenquanto

    // mostra o numero hexadecimal
    escreva("O número decimal em hexadecimal é: ")
    para j de i - 1 ate 0 passo -1 faca
    
        se hexadecimal[j] = 10 entao
         escreva("A")
        fimse
        se hexadecimal[j] = 11 entao
         escreva("B")
        fimse
        se hexadecimal[j] = 12 entao
         escreva("C")
        fimse
        se hexadecimal[j] = 13 entao
         escreva("D")
        fimse
        se hexadecimal[j] = 14 entao
         escreva("E")
        fimse
        se hexadecimal[j] = 15 entao
         escreva("F")
        fimse
        se hexadecimal[j] < 10 entao
            escreva(hexadecimal[j]:1)
        fimse
    fimpara

        
Fimalgoritmo