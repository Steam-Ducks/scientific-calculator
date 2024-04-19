Algoritmo "multiplication"

Var
   repete, valorAcumulado, valorAcumuladoString, valor : Real
   valorString: Caractere

Inicio
   repete <- 1
   ENQUANTO repete = 1 faça
      escreval ("========== Função Multiplicação ==========")
      escreval ()
      escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
      escreval ()
      escreval ("para finalizar, pressione '=' ou multiplique por zero.")


      ESCREVAL()
      ESCREVAL("=============================================================")
      escreval ()
      // Laço de repetição para que o usuário insira os valores para serem multiplicados
      escreva ("Valor: ")
      // Atribui o valor inserido a variável 'valorString'
      leia (valorAcumulado)

      repita
         // Pede para o usuário inserir um valor
         escreva ("Valor:",valorAcumulado," * ")
         // Atribui o valor inserido a variável 'valorString'
         leia (valorString)
         // Define o valor da variável 'valorAcumuladoString' como 'valorAcumulado'
         valorAcumuladoString <- valorAcumulado
         // Realiza a conversão da variável caractere 'valorString' para inteiro
         valor <- caracpnum (valorString)
         valorAcumulado <- valorAcumulado * valor
         // Exibe o resultado para o usuário da multiplicação para o usuário
         escreval ("Resultado:",valorAcumulado)
         // Condição para que quando o usuário pressionar '=' o programa irá finalizar e exibir o resultado da multiplicação
         escreval ()
      até (valorString = "=") ou (valorString = "0")

      ESCREVAL()
      ESCREVAL("O Resultado da multiplicação é: ", valorAcumulado)
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