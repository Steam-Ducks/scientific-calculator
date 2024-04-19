Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Rafaella Letícia Rodrigues Cruz
// Data atual  : 31/03/2024
Var
   valorAcumulado, valor, repete, valorAcumuladoString: real
   valorString: caractere

Inicio
   repete <- 1
   ENQUANTO repete = 1 faça
      ESCREVAL("========== FUNÇÃO SOMA ==========")
      escreval ()
      escreval ("Insira os valores , e eles serão automaticamente somados")
      escreval ()
      escreval ("para finalizar, pressione '='.")
      escreval ()
      ESCREVAL("=============================================================")
      escreval()
      escreva ("Valor: ")
      // Atribui o valor inserido a variável 'valorString'
      leia (valorAcumulado)

      repita
         // Pede para o usuário inserir um valor
         escreva ("Valor:", valorAcumulado," + ")
         // Atribui o valor inserido a variável 'valorString'
         leia (valorString)
         // Define o valor da variável 'valorAcumuladoString' como 'valorAcumulado'
         valorAcumuladoString <- valorAcumulado
         // Realiza a conversão da variável caractere 'valorString' para inteiro
         valor <- caracpnum (valorString)
         valorAcumulado <- valorAcumulado + valor
         // Exibe o resultado para o usuário da multiplicação para o usuário
         escreval ("Resultado:",valorAcumulado)
         // Condição para que quando o usuário pressionar '=' o programa irá finalizar e exibir o resultado da multiplicação
         escreval ()
      até valorString = "="

      ESCREVAL()
      ESCREVAL("O Resultado da soma é: ", valorAcumulado)
      ESCREVAL("=============================================================")
      ESCREVAL()
      ESCREVAL("Deseja calcular outro valor? ")
      ESCREVAL("1 <- Sim")
      ESCREVAL("2 <- Não")
      ESCREVA("Resposta: ")
      Leia(repete)
      ESCREVAL("=============================================================")
      ESCREVAL ("")
      limpatela
   fimenquanto

Fimalgoritmo