Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2024
Var
   // Seção de Declarações das variáveis

   X, N : real
   fim: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   repita
      limpatela
      escreva("Escreva um numero: ")
      leia(x)
      n <- x-1

      repita
         escreva(x, " x ")
         x <- x-1
      ate (x <=1)
      escreva("1 =")
      x <- n+1

      repita
         x <- x*n
         n <- n-1
      ate (n <=1)

      escreval(x)
      escreva("Deseja repetir?[S/N]")
      leia(fim)
      se (fim<>"S") e (fim<>"s") e (fim<>"N") e (fim<>"n") entao
         repita
            escreva("Por favor, digite um valor válido: ")
            leia(fim)
         ate(fim = "S") e (fim = "s") e (fim = "N") e (fim = "n")
      fimse
   ate(fim = "N") ou (fim = "n")
Fimalgoritmo