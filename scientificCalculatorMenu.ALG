Algoritmo "CALCULADORA CIENTIFICA - STEAM DUCKS"

Var

   // Variavel para a opção de realizar novamente a operação
   repete: inteiro

   // Variavel que armazena a opção do menu escolhida
   func, fun : inteiro

   //Variavel utilizada nas operações basicas, fatorial e juros

   valor, valorAcumulado, valorAcumuladoString, fatorial: real
   valorString: caractere

   // Variaveis para a operação de função do segundo grau

   valorA, valorB, valorC, delta, raizDelta, raizFun1, raizFun2: real
   raiz, numRaiz, precisao: real

   //Variaveis utilizadas nas conversoes numericas

   binario, numero, index, potencia, numDigitos: inteiro
   algarismo, octalReal, decimal, resto: real
   letraAtual, hexadecimal, parteHexadec, binarioString, octal: caractere
   valido: logico

   //Variaveis utilizadas na Concatenação de Strings

   string1, string2, concat : caractere

   //Variaveis utilizadas no calculo de Juros
   taxa, juros, montante: real
   temp: inteiro

Inicio

   repita


      escreval(":============== CALCULADORA CIENTIFICA ==============:")

      escreval()
      escreval("Digite a função que deseja utilizar:")
      escreval()
      escreval(" [1] OPERAÇÕES BÁSICAS")
      escreval(" [2] FATORIAL")
      escreval(" [3] FUNÇÃO DE SEGUNDO GRAU")
      escreval(" [4] CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10")
      escreval(" [5] CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2")
      escreval(" [6] CONVERSAO DE BASE NUMERICA: B2 X B16 / B16 X B2")
      escreval(" [7] CONCATENACAO DE STRINGS")
      escreval(" [8] CALCULO DE JUROS ")
      escreval(" [9] SAIR")
      escreval()
      escreva("RESPOSTA: ")
      leia(func)

      limpatela

      escolha func

      Caso 1
         repete <- 1
         enquanto repete = 1 faca
            limpatela
            repita
               escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2 =======")
               escreval("")
               escreval("Qual função deseja utilizar?")
               escreval("[1] ADIÇÃO")
               escreval("[2] SUBTRAÇÃO")
               escreval("[3] MULTIPLICAÇÃO")
               escreval("[4] DIVISÃO")
               escreval("[5] VOLTAR AO MENU")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2) ou (fun = 3) ou (fun = 4) ou (fun = 5)
            limpatela

            escolha fun

            Caso 5

               limpatela
               interrompa

            Caso 1

               escreval("========== FUNÇÃO SOMA ==========")
               escreval ("Insira os valores , e eles serão automaticamente somados")
               escreval ()
               escreval ("para finalizar, pressione '='.")
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
               escreval()
               escreval("O Resultado da soma é: ", valorAcumulado)

            Caso 2

               escreval("========== FUNÇÃO SUBTRAÇÃO ==========")
               escreval ("Insira os valores , e eles serão automaticamente subtraidos")
               escreval ()
               escreval ("para finalizar, pressione '='.")
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

               escreval()
               escreval("O Resultado da subtração é: ", valorAcumulado)


            Caso 3

               escreval ("========== Função Multiplicação ==========")
               escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
               escreval ("para finalizar, pressione '=' ou multiplique por zero.")
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
                  se (valorString = "=") ou (valorString = "0") entao
                     escreval ("O Resultado é:", valorAcumulado)
                     interrompa
                  fimse
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

               escreval()
               escreval("O Resultado da multiplicação é: ", valorAcumulado)

            Caso 4


               escreval ("========== Função Divisão ==========")
               ESCREVAL()
               escreval ("Insira os valores , e eles serão automaticamente multiplicados, ")
               escreval ("para finalizar, pressione '=' ou divida por zero.")
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

               escreval()
               escreval("O Resultado da divisão é: ", valorAcumulado)

            fimescolha
            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)
            limpatela
         fimenquanto
         limpatela

      Caso 2

         repete <- 1
         enquanto repete = 1 faça
            limpatela
            escreval ("========== Função Fatorial ==========")
            escreva("Insira um valor: ")
            leia(valor)
            fatorial <- valor-1

            repita
               valor <- valor * fatorial
               fatorial <- fatorial - 1
            ate (fatorial <= 1)

            escreval()
            escreval("O Resultado do fatorial é: ", valor)
            escreval()
            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 3

         repete <- 1
         enquanto repete = 1 faca
            limpatela
            escreval ("========== FUNCAO DE SEGUNDO GRAU ==========")
            //a precisão define a quantidade de casas decimais que a raiz sera decomposta
            precisao <- 0.000001

            // laço de repetição para a opção de fazer novamente
            escreval ()
            escreval ("identifique os valores da função:")
            escreval ()
            escreval ("f(x) = A.x^2 + B.x + C ")
            escreval ()

            //entrada dos valores da função
            escreval ("-----------------------------------")
            escreva ("entre com o valor de A: ")
            leia (valorA)
            escreva ("entre com o valor de B: ")
            leia (valorB)
            escreva ("entre com o valor de C: ")
            leia (valorC)
            escreval ("----------------------------------")

            //calculo do valor de delta
            delta <- (valorB*valorB)-4*valorA*valorC
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
               enquanto raiz > precisao faca
                  numRaiz <- (raiz + delta / raiz) / 2
                  se (raiz - numRaiz) < precisao então
                     raiz <- numRaiz
                     //assim que a raiz for decomposta até a casa decimal definida
                     //precisão, interrompemos o processo
                     interrompa
                  fimse
                  //definimos o valor de raiz de delta!
                  raiz <- numRaiz
                  raizDelta  <- raiz
               fimenquanto

               raizFun1 <- ((-valorB) + (raizDelta))/(2*valorA)
               raizFun2 <- ((-valorB) - (raizDelta))/(2*valorA)
               escreval ("a raiz x' é: ", raizFun1:4:2)
               escreval ()
               escreval ("a raiz x'' é: ", raizFun2:4:2)
               escreval ()

            fimse

            //opção do usuário para fazer a operação novamente

            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 4

         repete <- 1
         enquanto repete = 1 faça
            limpatela
            repita
               escreval ("======= CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10 =======")
               escreval("")
               escreval("Qual função deseja utilizar?")
               escreval("[1] Decimal para Binario")
               escreval("[2] Binario para Decimal")
               escreval("[3] Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2)ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            limpatela

            se fun = 1 entao
               binarioString <- ""
               escreval("===== Conversor Decimal -> Binario =====")
               escreval("")
               escreva("Digite um numero para converter: ")
               leia(numero)

               se numero = 0 entao
                  binarioString <- "0"
               senao
                  //Iteramos enquanto o numero for > 0
                  enquanto (numero > 0) faca
                     //Salvamos o resto da divisao por 2
                     resto <- numero MOD 2
                     //adicionamos o 1 ou 0 ao binÃ¡rio
                     binarioString <- Numpcarac(resto) + binarioString
                     //dividimos o numero por 2
                     numero <- numero div 2
                  fimenquanto
               fimse
               //Ao fim do loop teremos uma sequencia de 1s e 0s que representa a conversÃ£o do nÃºmero inicial
               escreval("Numero convertido: ", binarioString)
               escreval("")
            fimse

            se fun = 2 entao

               decimal <- 0
               potencia <- 0
               valido <- falso

               // Validar input ----------------------------------------------------------------------------------------------

               // Input comeca como invalido é perguntado repetidademente até que um input valido seja fornecido
               enquanto valido = falso faca

                  escreval("===== Conversor Binario -> Decimal =====")
                  escreval("")
                  valido <- verdadeiro // assumimos que o input sera valido
                  escreva("Digite um numero binario para converter: ")
                  leia(binarioString)

                  // Percorremos o input letra a letra
                  para index <- 1 ate compr(binarioString) faca
                     letraAtual <- copia(binarioString, index, 1)
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

               // Começamos pelo ultimo numero binario.
               // Compr() retorna o tamanho de um texto.
               // Subtraimos 1 para que o numero nao ultrapasse o indice do texto.
               para index <- compr(binarioString) ate 1 passo -1 faca

                  // Quando o caractere atual for '1', somamos ele elevado Ã  potÃªncia atual.
                  se  copia(binarioString, index, 1) = "1" entao
                     decimal <- int(decimal + (2 ^ potencia))
                  fimse

                  // Aumentamos em 1 a potÃªncia para utilizar na prÃ³xima iteraÃ§Ã£o do loop.
                  potencia <- potencia + 1
               fimpara

               // Ao fim do loop, teremos todos os nÃºmeros somados na variÃ¡vel 'decimal',
               // que irÃ¡ representar corretamente a conversÃ£o.

               escreval("O numero decimal é: ", decimal)
               escreval("")
            fimse

            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 5

         repete <- 1
         enquanto repete = 1 faca
            limpatela

            repita
               escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2 =======")
               escreval("")
               escreval("Qual função deseja utilizar?")
               escreval("[1] Binario para Octal")
               escreval("[2] Octal para Binário")
               escreval("[3]  Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2) ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            limpatela

            //====================================Função 1==================================
            se Fun = 1 entao

               octal <- ""
               escreval("===== Conversor Binario -> Octal =====")
               escreval("")
               escreval("Quantos algarismos tem o numero binario que será convertido?")
               escreva("resposta: ")
               leia(algarismo)
               algarismo <- algarismo - 1

               escreva("Escreva o primeiro algarismo: ")
               leia(numero)

               octalReal <- octalReal + numero * 2 ^ (algarismo)

               algarismo <- algarismo - 1

               enquanto algarismo >= 0 faça
                  escreva("Escreva o próximo algarismo: ")
                  leia(numero)
                  octalReal <- octalReal + numero * 2 ^ (algarismo)
                  algarismo <- algarismo - 1
               fimenquanto

               decimal <- octalReal

               enquanto decimal >= 1 faça

                  octalReal <- decimal % 8

                  se octalReal = 0 então
                     octal <- "0" + octal
                  fimse
                  se octalReal = 1 então
                     octal <- "1" + octal
                  fimse
                  se octalReal = 2 então
                     octal <- "2" + octal
                  fimse
                  se octalReal = 3 então
                     octal <- "3" + octal
                  fimse
                  se octalReal = 4 então
                     octal <- "4" + octal
                  fimse
                  se octalReal = 5 então
                     octal <- "5" + octal
                  fimse
                  se octalReal = 6 então
                     octal <- "6" + octal
                  fimse
                  se octalReal = 7 então
                     octal <- "7" + octal
                  fimse

                  decimal <- decimal / 8

               fimenquanto

               escreval("Numero convertido: ",octal)



            fimse
            //====================================Função 2==================================

            se fun = 2 entao

               octalReal <- 0

               escreval("===== Conversor Octal -> Binario =====")
               binarioString <- ""

               escreval("")
               escreval("Quantos algarismos tem o numero octal que quer converter?")
               escreva("resposta: ")
               leia(algarismo)


               escreva("Escreva o primeiro algarismo: ")
               leia(numero)
               algarismo <- algarismo - 1

               //a equação a baixo está fazendo a formula e guardando na variavel SegVal

               octalReal <- octalReal + numero * 8 ^ (algarismo)

               //Para calcular o próximo digito, tiramos um numero da variavel alg pois
               //estamos a utilizando como index das posições

               algarismo <- algarismo - 1

               //o laço a seguir vai repetir o calculo até que alg que é o index seja
               //menor que 0 que é a última posição do binario

               enquanto algarismo >= 0 faca
                  escreva("Escreva o próximo algarismo: ")
                  leia(numero)
                  octalReal <- octalReal + numero * 8 ^ (algarismo)
                  algarismo <- algarismo - 1
               fimenquanto

               decimal <- octalReal

               enquanto decimal >= 1 faca

                  //O binario é a sobra dos numero dividido por dois. O simbolo de porcentagem
                  //faz a divisão do numero por 2, porem pega o resto da operação

                  octalReal <- decimal % 2

                  //O grande problema é que o numero binario é escrito ao contrato de como ele é
                  //calculado, então se o resultado da divizão for 0101, lemos o numero como 1010

                  //Por isso, transformei as sobras em texto e fui concatenando na variavel bi
                  //de forma que os numeros vão sendo concatenados a esquerda

                  se octalReal = 0 então
                     binarioString <- "0" + binarioString
                  senao
                     binarioString <- "1" + binarioString
                  fimse


                  decimal <- decimal / 2

               fimenquanto

               escreval("Numero convertido: ",binarioString)
               escreval("")


            fimse

            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 6


         repete <- 1
         enquanto repete = 1 faça

            limpatela
            repita
               limpatela
               escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B16 / B16 X B2 =======")
               escreval("")
               escreval("Qual função deseja utilizar?")
               escreval("[1] Binario para Hexadecimal")
               escreval("[2] Hexadecimal para Binário")
               escreval("[3] Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2) ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            limpatela

            //====================================Função 1==================================
            se Fun = 1 entao
               escreval("===== Conversor Binario -> Hexadecimal =====")
               escreval
               decimal <- 0
               potencia <- 0
               numDigitos <- 0
               hexadecimal <- ""

               //Recebe o valor Binario a ser convertido em Hexadecimal
               escreva("Digite um numero binario para converter: ")
               leia(binarioString)

               numDigitos <- compr(binarioString)

               // Começamos pelo ultimo digito binario.
               para index <- numDigitos ate 1 passo -1 faca

                  // Quando o caractere atual for '1', somamos ele elevado a  potencia atual.
                  se copia(binarioString, index, 1) = "1" entao
                     decimal <- int(decimal + (2 ^ potencia))
                  fimse

                  // Incrementa a potencia para a proxima iteraçãoo.
                  potencia <- potencia + 1

                  // A cada 4 digitos binarios ou no ultimo digito, convertemos para hexadecimal.
                  se (potencia = 4) ou (index = 1) entao
                     // Converte o decimal acumulado para hexadecimal.
                     escolha decimal
                     caso 0
                        hexadecimal <- "0" + hexadecimal
                     caso 1
                        hexadecimal <- "1" + hexadecimal
                     caso 2
                        hexadecimal <- "2" + hexadecimal
                     caso 3
                        hexadecimal <- "3" + hexadecimal
                     caso 4
                        hexadecimal <- "4" + hexadecimal
                     caso 5
                        hexadecimal <- "5" + hexadecimal
                     caso 6
                        hexadecimal <- "6" + hexadecimal
                     caso 7
                        hexadecimal <- "7" + hexadecimal
                     caso 8
                        hexadecimal <- "8" + hexadecimal
                     caso 9
                        hexadecimal <- "9" + hexadecimal
                     caso 10
                        hexadecimal <- "A" + hexadecimal
                     caso 11
                        hexadecimal <- "B" + hexadecimal
                     caso 12
                        hexadecimal <- "C" + hexadecimal
                     caso 13
                        hexadecimal <- "D" + hexadecimal
                     caso 14
                        hexadecimal <- "E" + hexadecimal
                     caso 15
                        hexadecimal <- "F" + hexadecimal
                     fimescolha

                     // Reinicia variaveis para o proximo grupo de 4 digitos.
                     decimal <- 0
                     potencia <- 0
                  fimse

               fimpara
               //Mostra o valor convertido de Binario para Hexadecimal
               escreval("O numero binario ", binarioString, " em hexadecimal é: ", hexadecimal)
            fimse

            se fun = 2 entao
               escreval("===== Hexadecimal -> Binario =====")
               escreval ()
               // Coleta o numero Hexadecimal
               escreva("Digite um numero Hexadecimal:")
               leia(hexadecimal)
               binarioString <- ""
               numDigitos <- compr(hexadecimal)

               // Loop para percorrer cada digito hexadecimal.
               para index <- 1 ate numDigitos faca
                  // Obtem o caractere hexadecimal atual.
                  parteHexadec <- copia(hexadecimal, index, 1)

                  // Converte o caractere hexadecimal para inteiro.
                  escolha parteHexadec
                  caso "0"
                     binarioString <- binarioString + "0000"
                  caso "1"
                     binarioString <- binarioString + "0001"
                  caso "2"
                     binarioString <- binarioString + "0010"
                  caso "3"
                     binarioString <- binarioString + "0011"
                  caso "4"
                     binarioString <- binarioString + "0100"
                  caso "5"
                     binarioString <- binarioString + "0101"
                  caso "6"
                     binarioString <- binarioString + "0110"
                  caso "7"
                     binarioString <- binarioString + "0111"
                  caso "8"
                     binarioString <- binarioString + "1000"
                  caso "9"
                     binarioString <- binarioString + "1001"
                  caso "A"
                     binarioString <- binarioString + "1010"
                  caso "B"
                     binarioString <- binarioString + "1011"
                  caso "C"
                     binarioString <- binarioString + "1100"
                  caso "D"
                     binarioString <- binarioString + "1101"
                  caso "E"
                     binarioString <- binarioString + "1110"
                  caso "F"
                     binarioString <- binarioString + "1111"
                  fimescolha

                  binario <- caracpnum(binarioString)

               fimpara
               // Mostra o resultado da conversao
               escreval("O numero hexadecimal ", hexadecimal, " em binario é: ", binario)
            fimse

            escreval
            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 7

         repete <- 1
         enquanto repete = 1 faca

            escreval("========== CONCATENAÇÃO DE DUAS STRINGS ==========")
            escreval ()
            escreval("Digite o conteúdo da primeira String:")
            leia(string1)
            escreval("Digite o conteúdo da segunda String:")
            leia(string2)


            concat <- string1 + " " + string2

            escreval("A concatenação das duas strings é:")
            escreval (concat)
            escreval
            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja realizar a operação novamente? ")
               escreval("[1] Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)

         fimenquanto
         limpatela

      Caso 8

         repete <- 1
         enquanto repete = 1 faca
            repita
               escreval ("======= CÁLCULO DE JUROS =======")
               escreval("")
               escreval("Qual função deseja utilizar?")
               escreval("[1] Juros Simples")
               escreval("[2] Juros Compostos")
               escreval("[3] Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2)ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            se fun = 1 entao
            limpatela
               escreval("========== CALCULO DE JUROS SIMPLES ==========")

               escreva("Digite o valor inicial do emprestimo ou investimento: ")
               leia(valor)

               escreva("Digite a porcentagem da Taxa de Juros: ")
               leia(taxa)
               escreva("Por ultimo, informe os anos decorridos: ")
               leia (temp)

               taxa <- taxa /100

               juros <- valor * taxa * temp

               escreval("O valor dos juros e de: R$ ",juros)

            fimse

            se fun = 2 entao
               limpatela
               escreval ("Insira o valor do emprestimo ou investimento: ")
               leia (valor)
               escreval ()
               escreval ("Agora, insira a Taxa de Juros: ")
               leia (taxa)
               escreval ()
               taxa <- taxa/100
               escreval ("Por ultimo, informe tempo decorrido em meses: ")
               leia (temp)
               escreval ()
               montante <- valor * (1+taxa)^temp
               juros <- montante - valor
               escreval ()
               escreval ("Seu Montante total final sera: R$", montante:8:2)
               escreval
               escreval ("Total em Juros: R$", juros:8:2)

            fimse

            escreval ()
            repita
               escreval("=============================================================")
               escreval()
               escreval("Deseja calcular outro valor? ")
               escreval("[1]Sim")
               escreval("[2] Não")
               escreva("Resposta: ")
               leia(repete)
            ate (repete = 1) ou (repete = 2)
            limpatela
         fimenquanto
         limpatela

      caso 9

         interrompa

      Outrocaso

         limpatela
         escreval ("Opção Inválida, escolha uma opção presente no menu!")
         escreval ()

      fimescolha

   ate func = 12
   escreval ("PROGRAMA ENCERRADO!")

Fimalgoritmo