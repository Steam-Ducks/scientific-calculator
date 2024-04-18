Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/04/2024
Var

   Func,repete,  resto: inteiro
   Valor,soma,subtracao,valorAcumulado,valorAcumuladoString,fatorial: real
   delta, R1, R2, rdelta, precisao, raiz, nraiz,alg,SegVal,num,dec: real
   eq_a, eq_b, eq_c,Fun, SegInt, potencia, index, decimal, numero: inteiro
   valorString,oct,bi,letraAtual: caracter
   valido: logico


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

      repete <- 1
      Enquanto repete = 1 faça
         limpatela

         escreval ("======= CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10 =======")
         Escreval("")
         Escreval("Qual função deseja utilizar?")
         Escreval("1 <- Decimal para Binario")
         Escreval("2 <- Binario para Decimal")
         Escreval("")
         Escreva("Digite a sua resposta: ")
         Leia(Fun)

         limpatela

         se Fun = 1 entao
            bi <- ""
            escreval("===== Conversor Decimal -> Binario =====")
            escreval("")
            escreva("Digite um numero para converter: ")
            leia(numero)

            se numero = 0 entao
               bi <- "0"
            senao
               //Iteramos enquanto o numero for > 0
               enquanto (numero > 0) faca
                  //Salvamos o resto da divisao por 2
                  resto <- numero MOD 2
                  //adicionamos o 1 ou 0 ao binÃ¡rio
                  bi <- Numpcarac(resto) + bi
                  //dividimos o numero por 2
                  numero <- numero div 2
               fimenquanto
            fimse
            //Ao fim do loop teremos uma sequencia de 1s e 0s que representa a conversÃ£o do nÃºmero inicial


            escreval("Numero convertido: ", bi)
            escreval("")
         fimse

         se Fun = 2 entao

            decimal <- 0
            potencia <- 0
            valido <- falso

            // Validar input ----------------------------------------------------------------------------------------------

            // Input comeca como invalido Ã© perguntado repetidademente atÃ© que um input valido seja fornecido
            enquanto valido = falso faca

               escreval("===== Conversor Binario -> Decimal =====")
               escreval("")
               valido <- verdadeiro // assumimos que o input sera valido
               escreva("Digite um numero binario para converter: ")
               leia(bi)

               // Percorremos o input letra a letra
                // Percorremos o input letra a letra
        para index <- 1 ate compr(binario) faca
            letraAtual <- copia(binario, index, 1)
            //caso a letra nao seja 1 ou 0, entao o input nao pode ser marcado como binario
            se (letraAtual <> "1") e (letraAtual <> "0") entao
                valido <- falso
            fimse
        fimpara
        se valido = falso entao
            escreval("Binario invalido!")
        fimse
    fimenquanto


// converter base -----------------------------------------------------------------------------------------------

    // ComeÃ§amos pelo Ãºltimo nÃºmero binÃ¡rio.
    // Compr() retorna o tamanho de um texto.
    // SubtraÃ­mos 1 para que o nÃºmero nÃ£o ultrapasse o Ã­ndice do texto.
    para index <- compr(binario) ate 1 passo -1 faca

        // Quando o caractere atual for '1', somamos ele elevado Ã  potÃªncia atual.
        se  copia(binario, index, 1) = "1" entao
            decimal <- int(decimal + (2 ^ potencia))
        fimse

        // Aumentamos em 1 a potÃªncia para utilizar na prÃ³xima iteraÃ§Ã£o do loop.
        potencia <- potencia + 1
    fimpara

    // Ao fim do loop, teremos todos os nÃºmeros somados na variÃ¡vel 'decimal',
    // que irÃ¡ representar corretamente a conversÃ£o.

    escreval("O nÃºmero decimal Ã©: ", decimal)
    escreval("")
         fimse
         ESCREVAL("=============================================================")
         ESCREVAL()
         ESCREVAL("Deseja calcular outro valor? ")
         ESCREVAL("1 <- Sim")
         ESCREVAL("2 <- Não")
         ESCREVA("Resposta: ")
         Leia(repete)

      fimenquanto

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


            escreva("Escreva o primeiro algarismo: ")
            leia(Num)
            alg <- alg - 1

            //a equação a baixo está fazendo a formula e guardando na variavel SegVal

            SegVal <- SegVal + Num * 8 ^ (alg)

            //Para calcular o próximo digito, tiramos um numero da variavel alg pois
            //estamos a utilizando como index das posições

            alg <- alg - 1

            //o laço a seguir vai repetir o calculo até que alg que é o index seja
            //menor que 0 que é a última posição do binario

            enquanto alg >= 0 faça
               escreva("Escreva o próximo algarismo: ")
               leia(Num)
               SegVal <- SegVal + Num * 8 ^ (alg)
               alg <- alg - 1
            fimenquanto

            dec <- SegVal

            enquanto dec >= 1 faça

               //O binario é a sobra dos numero dividido por dois. O simbolo de porcentagem
               //faz a divisão do numero por 2, porem pega o resto da operação

               SegVal <- dec % 2

               //O grande problema é que o numero binario é escrito ao contrato de como ele é
               //calculado, então se o resultado da divizão for 0101, lemos o numero como 1010

               //Por isso, transformei as sobras em texto e fui concatenando na variavel bi
               //de forma que os numeros vão sendo concatenados a esquerda

               se SegVal = 0 então
                  bi <- "0" + bi
               senao
                  bi <- "1" + bi
               fimse


               dec <- dec / 2

            fimenquanto

            escreval("Numero convertido: ",bi)
            escreval("")


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