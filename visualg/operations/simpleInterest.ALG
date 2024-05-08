Algoritmo "jurosSimples"

Var
juros, valor, taxa: real
temp,i: inteiro


Inicio

i <- 1

   enquanto i < 2 faca

      Escreval("------------------Juros Simples------------------")

      Escreva("Digite o valor inicial do emprestimo, ou investimento: ")
      Leia(valor)

      Escreva("Digite a porcentagem da taxa: ")
      Leia(taxa)

      Escreva("Por último, informe os anos decorridos: ")
      leia (temp)

      taxa <- taxa /100

      juros <- valor * taxa * temp

      Escreval("O valor dos juros e de: ",juros)
      
      Escreval("-----------------------------------------------")

      Escreval ("Deseja continuar? ")

      Escreval ("Aperte: 1- Para SIM / 2- Para NÃO ")
      Leia (i)

   fimenquanto

Fimalgoritmo
