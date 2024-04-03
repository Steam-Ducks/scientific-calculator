Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2024
Var
// Seção de Declarações das variáveis 

X, N : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreva("escreva um numero")
   leia(x)
   n <- x-1
   
   repita
      x <- x*n
      n <- n-1
   ate (n <=1)

   escreva(x)

Fimalgoritmo