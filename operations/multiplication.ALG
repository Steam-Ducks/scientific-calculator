Algoritmo "multiplication"

Var
valor, valorAcumulado, valorAcumuladoString : inteiro
valorString, opt: caractere


Inicio

// valorAcumulado é inicializado com o valor 1
valorAcumulado <- 1
escreval ("========== Multiplicação ==========")
escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
escreval ("para finalizar, pressione '='.")
escreval ("")

   // Laço de repetição para que o usuário insira os valores para serem multiplicados
   repita
      escreval ()
      // Pede para o usuário inserir um valor
      escreva ("Valor: ")
      // Atribui o valor inserido a variável 'valorString'
      leia (valorString)
      // Define o valor da variável 'valorAcumuladoString' como 'valorAcumulado'
      valorAcumuladoString <- valorAcumulado
      // Realiza a conversão da variável caractere 'valorString' para inteiro
      valor <- caracpnum (valorString)
      valorAcumulado <- valorAcumulado * valor
      // Exibe o resultado para o usuário da multiplicação para o usuário
      escreval ("Resultado:", valorAcumuladoString, " x",valor, " =", valorAcumulado)
   // Condição para que quando o usuário pressionar '=' o programa irá finalizar e exibir o resultado da multiplicação
   até valorString = "="

Fimalgoritmo