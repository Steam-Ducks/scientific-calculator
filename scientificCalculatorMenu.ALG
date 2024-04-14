Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/04/2024
Var

   Func,repete: inteiro
   Valor,soma,subtracao,valorAcumulado,valorAcumuladoString,fatorial: real
   delta, R1, R2, rdelta, precisao, raiz, nraiz,alg,SegVal,num,dec: real
   eq_a, eq_b, eq_c,Fun, SegInt: inteiro
   valorString,oct,bi: caracter


Inicio
   ESCREVAL("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
   ESCREVAL("::                                                    ::")
   ESCREVAL(":                CALCULADORA CIENTIFICA                :")
   ESCREVAL("::                                                    ::")
   ESCREVAL("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
   ESCREVAL()
   ESCREVAL("Digite a função que deseja utilizar:")
   ESCREVAL()
   ESCREVAL(" 1 <- SOMA")
   ESCREVAL(" 2 <- SUBTRACAO")
   ESCREVAL(" 3 <- MULTIPLICACAO")
   ESCREVAL(" 4 <- DIVISAO")
   ESCREVAL(" 5 <- FATORIAL")
   ESCREVAL(" 6 <- FUNCAO DE SEGUNDO GRAU")
   ESCREVAL(" 7 <- CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10")
   ESCREVAL(" 8 <- CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2")
   ESCREVAL(" 9 <- CONVERSAO DE BASE NUMERICA: B10 X B16 / B16 X B10")
   ESCREVAL("10 <- CONCATENACAO DE STRINGS")
   ESCREVAL("11 <- JUROS SIMPLES")
   ESCREVAL("12 <- SAIR")
   ESCREVAL()
   ESCREVA("RESPOSTA: ")
   LEIA(Func)

   LIMPATELA

   escolha Func
   Caso 1
      ESCREVAL("========== FUNÇÃO SOMA ==========")
      escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
      escreval ("para finalizar, pressione '='.")
      repete <- 1
      ENQUANTO repete = 1 faça
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

      fimenquanto
      limpatela

   Caso 2

      escreval("========== FUNÇÃO SUBTRAÇÃO ==========")
      escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
      escreval ("para finalizar, pressione '='.")
      repete <- 1
      ENQUANTO repete = 1 faça
         escreval()
         escreva ("Valor: ")
         // Atribui o valor inserido a variável 'valorString'
         leia (valorAcumulado)

         repita
            // Pede para o usuário inserir um valor
            escreva ("Valor:",valorAcumulado," - ")
            // Atribui o valor inserido a variável 'valorString'
            leia (valorString)
            // Define o valor da variável 'valorAcumuladoString' como 'valorAcumulado'
            valorAcumuladoString <- valorAcumulado
            // Realiza a conversão da variável caractere 'valorString' para inteiro
            valor <- caracpnum (valorString)
            valorAcumulado <- valorAcumulado - valor
            // Exibe o resultado para o usuário da multiplicação para o usuário
            escreval ("Resultado:",valorAcumulado)
            // Condição para que quando o usuário pressionar '=' o programa irá finalizar e exibir o resultado da multiplicação
            escreval ()
         até valorString = "="

         ESCREVAL()
         ESCREVAL("O Resultado da subtração é: ", valorAcumulado)
         ESCREVAL("=============================================================")
         ESCREVAL()
         ESCREVAL("Deseja calcular outro valor? ")
         ESCREVAL("1 <- Sim")
         ESCREVAL("2 <- Não")
         ESCREVA("Resposta: ")
         Leia(repete)
         ESCREVAL("=============================================================")
         ESCREVAL ("")
      fimenquanto

   Caso 3

      escreval ("========== Função Multiplicação ==========")
      escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
      escreval ("para finalizar, pressione '='.")
      repete <- 1
      ENQUANTO repete = 1 faça

         ESCREVAL()
         escreval ("")

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
         até valorString = "="

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

      fimenquanto

   Caso 4

      escreval ("========== Função Divisão ==========")
      repete <- 1
      ENQUANTO repete = 1 faça

         ESCREVAL()
         escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
         escreval ("para finalizar, pressione '='.")
         escreval ("")

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
         até valorString = "="

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

      fimenquanto

   Caso 5

      escreval ("========== Função Fatorial ==========")
      repete <- 1
      ENQUANTO repete = 1 faça


         escreva("Insira um valor: ")
         leia(Valor)
         fatorial <- Valor-1

         repita
            Valor <- Valor * fatorial
            fatorial <- fatorial - 1
         ate (fatorial <= 1)

         ESCREVAL()
         ESCREVAL("O Resultado do fatorial é: ", Valor)
         ESCREVAL("=============================================================")
         ESCREVAL()
         ESCREVAL("Deseja calcular outro valor? ")
         ESCREVAL("1 <- Sim")
         ESCREVAL("2 <- Não")
         ESCREVA("Resposta: ")
         Leia(repete)
         ESCREVAL("=============================================================")
         ESCREVAL ("")

      fimenquanto


   Caso 6

      escreval ("========== FUNCAO DE SEGUNDO GRAU ==========")
      //a precisão define a quantidade de casas decimais que a raiz sera decomposta
      precisao <- 0.000001

      // laço de repetição para a opção de fazer novamente
      repete <- 1
      ENQUANTO repete = 1 faça
         limpatela

         //mensagem para o usuario identificar os valores
         escreval ("Calculo de função do segundo grau!")
         escreval ()
         escreval ("identifique os valores da função:")
         escreval ("f(x) = A.x^2 + B.x + C ")
         escreval ()

         //entrada dos valores da função
         escreval ("-----------------------------------")
         escreva ("entre com o valor de A: ")
         leia (eq_a)
         escreva ("entre com o valor de B: ")
         leia (eq_b)
         escreva ("entre com o valor de C: ")
         leia (eq_c)
         escreval ("----------------------------------")

         //calculo do valor de delta
         delta <- (eq_b*eq_b)-4*eq_a*eq_c
         escreval()
         escreval("o valor de delta é: ",delta)

         //calculo das raizes da função
         se delta < 0 então
            escreval ("não existem raizes reais da função")
            escreval ()
         senão
            //para calcular a raiz quadrada utilizamos o método de média aproimada
            //para começar decompomos a raiz por 2
            raiz <- delta / 2

            //procedimento de decomposição da raiz
            Enquanto raiz > precisao Faça
               nraiz <- (raiz + delta / raiz) / 2
               Se (raiz - nraiz) < precisao Então
                  raiz <- nraiz
                  //assim que a raiz for decomposta até a casa decimal definida
                  //precisão, interrompemos o processo
                  Interrompa
               FimSe
               //definimos o valor de raiz de delta!
               raiz <- nraiz
               rdelta  <- raiz
            FimEnquanto

            R1 <- ((-eq_b) + (rdelta))/(2*eq_a)
            R2 <- ((-eq_b) - (rdelta))/(2*eq_a)
            escreval ("a raiz x' é: ", R1:4:2)
            escreval ()
            escreval ("a raiz x'' é: ", R2:4:2)
            escreval ()
         fimse

         //opção do usuário para fazer a operação novamente

         ESCREVAL("=============================================================")
         ESCREVAL()
         ESCREVAL("Deseja calcular outro valor? ")
         ESCREVAL("1 <- Sim")
         ESCREVAL("2 <- Não")
         ESCREVA("Resposta: ")
         Leia(repete)
         ESCREVAL("=============================================================")
         ESCREVAL ("")
      fimenquanto

   Caso 7

      escreval ("======= CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10 =======")


   Caso 8


      repete <- 1
      Enquanto repete = 1 faça
         limpatela

         escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2 =======")
         Escreval("")
         Escreval("Qual função deseja utilizar?")
         Escreval("1 <- Binario para Octal")
         Escreval("2 <- Octal para Binário")
         Escreval("")
         Escreva("Digite a sua resposta: ")
         Leia(Fun)

         limpatela

         //====================================Função 1==================================
         se Fun = 1 entao

            oct <- ""
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



         Fimse
      //====================================Função 2==================================

      se Fun = 2 entao

         SegVal <- 0

         escreval("===== Conversor Octal -> Binario =====")
         bi <- ""

         escreval("")
         escreval("Quantos algarismos tem o numero octal que quer converter?")
         escreva("resposta: ")
         leia(alg)


         enquanto alg > 0 faça

            escreva("Escreva o primeiro algarismo: ")
            leia(Num)

            enquanto Num >= 1 faça

               SegVal <- Num % 2

               se SegVal = 0 então
                  bi <- "0" + Bi
               senao
                  bi <- "1" + Bi
               fimse

               Num <- Num / 2

            fimenquanto

            alg <- alg - 1

         fimenquanto

         escreval("Numero convertido: ",bi)


      fimse

      ESCREVAL("=============================================================")
      ESCREVAL()
      ESCREVAL("Deseja calcular outro valor? ")
      ESCREVAL("1 <- Sim")
      ESCREVAL("2 <- Não")
      ESCREVA("Resposta: ")
      Leia(repete)

   fimenquanto



Caso 9




Caso 10




Caso 11


fimescolha


Fimalgoritmo