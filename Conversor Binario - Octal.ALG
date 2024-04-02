Algoritmo "Conversor Octal -> Binario"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 3/31/2024
Var


   dec,SegVal:real
   Fun,alg,num: inteiro
   oct: caracter



Inicio

        escreval("===== Conversor Binario -> Octal =====")

          escreval("")
          escreval("Quantos algarismos tem o numero binario que será convertido?")
          escreva("resposta: ")
          leia(alg)
          alg <- alg - 1

          escreva("Escreva o primeiro algarismo: ")
          leia(Num)

          SegVal <- SegVal + Num * 2 ^ (alg)

          alg <- alg - 1

          enquanto alg >= 0 faça
                 escreva("Escreva o próximo algarismo: ")
                 leia(Num)
                 SegVal <- SegVal + Num * 2 ^ (alg)
                 alg <- alg - 1
          fimenquanto
          
          dec <- SegVal
          
          enquanto dec >= 1 faça

            SegVal <- dec % 8

            se SegVal = 0 então
              oct <- "0" + oct
            fimse
            se SegVal = 1 então
              oct <- "1" + oct
            fimse
            se SegVal = 2 então
              oct <- "2" + oct
            fimse
            se SegVal = 3 então
              oct <- "3" + oct
            fimse
            se SegVal = 4 então
              oct <- "4" + oct
            fimse
            se SegVal = 5 então
              oct <- "5" + oct
            fimse
            se SegVal = 6 então
              oct <- "6" + oct
            fimse
            se SegVal = 7 então
              oct <- "7" + oct
            fimse

            dec <- dec / 8

          fimenquanto

          escreval("Numero convertido: ",oct)
          escreval("")
          

Fimalgoritmo