Algoritmo "division"

Var
   valorAcumulado, valor, valorAcumuladoString, repete : real
   valorString : caractere

Inicio
   repete <- 1
   ENQUANTO repete = 1 faça
      escreval ("========== Função Divisão ==========")
      ESCREVAL()
      escreval ("Insira os valores , e eles serão automaticamente divididos ")
      escreval ()
      escreval ("para finalizar, pressione '=' ou divida por zero.")
      escreval ()
      ESCREVAL("=============================================================")
      escreval ()
      // Laço de repetição para que o usuário insira os valores para serem multiplicados
      escreva ("Valor: ")
      // Atribui o valor inserido a variável 'valorString'
      leia (valorAcumulado)

      repita
         // Pede para o usuário inserir um valor
         escreva ("Valor:", valorAcumulado, " / ")
         // Atribui o valor inserido a variável 'valorString'
         leia (valorString)

         // condições para finalizar a operação, se utilizar "=" ou dividir por zero
         se (valorString = "=") ou (valorString = "0")entao
            interrompa
         fimse
         // Define o valor da variável 'valorAcumuladoString' como 'valorAcumulado'

         se valorString <> "1" entao
            valorAcumuladoString <- valorAcumulado
            // Realiza a conversão da variável caractere 'valorString' para inteiro
            valor <- caracpnum (valorString)
            valorAcumulado <- valorAcumulado / valor
            // Exibe o resultado para o usuário da multiplicação para o usuário
            escreval ("Resultado:",valorAcumulado)
            // Condição para que quando o usuário pressionar '=' o programa irá finalizar e exibir o resultado da multiplicação
            escreval ()
         fimse
      até (valorString = "=") ou (valorString = "0")

      ESCREVAL()
      ESCREVAL("O Resultado da divisão é: ", valorAcumulado)
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