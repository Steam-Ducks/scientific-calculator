Algoritmo "CALCULADORA CIENTIFICA - STEAM DUCKS"

Var

   // Variavel para a opcao de realizar novamente a operacao
   repete: inteiro

   // Variavel que armazena a opcao do menu escolhida
   func, fun : inteiro

   //Variavel utilizada nas operacoes basicas, fatorial e juros
   valor, valorAcumulado, valorFat, fatorial: real
   vezes, contador: inteiro

   // Variaveis para a operacao de funcao do segundo grau
   valorA, valorB, valorC, delta, raizDelta, raizFun1, raizFun2: real
   raiz, numRaiz, precisao, raizquadrada: real

   //Variaveis utilizadas nas conversoes numericas
   Num, binario, numero, index, potencia, numDigitos,num_digitos: inteiro
   algarismo, octalReal, decimal, resto, SegVal,valPos,dec: real
   parte_octal, letraAtual, bi, hexadecimal, parteHexadec, binarioString, octal: caractere
   valido: logico


   //Variaveis utilizadas na Concatenacao de Strings
   string1, string2, concat : caractere

   //Variaveis utilizadas no calculo de Juros
   taxa, juros, montante: real
   temp: inteiro

Procedimento Repetir()
Inicio
   repita
      escreval("=============================================================")
      escreval()
      escreval("Deseja calcular outro valor? ")
      escreval("1 <- Sim")
      escreval("2 <- Nao")
      escreva("Resposta: ")
      leia(repete)
   ate (repete = 1) ou (repete = 2)
Fimprocedimento

Funcao RaizQuad (R: real):real
Inicio
   //a precisao define a quantidade de casas decimais que a raiz sera decomposta
   precisao <- 0.000001
   //para calcular a raiz quadrada utilizamos o m?todo de m?dia aproimada
   //para comecar decompomos a raiz por 2
   raiz <- R / 2

   //procedimento de decomposi??o da raiz
   enquanto raiz > precisao faca
      numRaiz <- (raiz + R / raiz) / 2
      se (raiz - numRaiz) < precisao entao
         raiz <- numRaiz
         //assim que a raiz for decomposta ate a casa decimal definida
         //precisao, interrompemos o processo
         interrompa
      fimse
      //definimos o valor de raiz de delta!
      raiz <- numRaiz
      raizquadrada  <- raiz
      Retorne raizquadrada
   fimenquanto
FimFuncao

Inicio

   repita

      escreval("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
      escreval(":                CALCULADORA CIENTIFICA                :")
      escreval("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
      escreval()
      escreval("Digite a funcao que deseja utilizar:")
      escreval()
      escreval("[1]  SOMA")
      escreval("[2]  SUBTRACAO")
      escreval("[3]  MULTIPLICACAO")
      escreval("[4]  DIVISAO")
      escreval("[5]  FATORIAL")
      escreval("[6]  FUNCAO DE SEGUNDO GRAU")
      escreval("[7]  CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10")
      escreval("[8]  CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2")
      escreval("[9]  CONVERSAO DE BASE NUMERICA: B2 X B16 / B16 X B2")
      escreval("[10] CONCATENACAO DE STRINGS")
      escreval("[11] CALCULO DE JUROS ")
      escreval("[12] SAIR")
      escreval()
      escreva("Opção desejada: ")
      leia(func)

      limpatela

      escolha func

      Caso 1
         repete <- 1
         enquanto repete = 1 faca
            valor <- 0
            valorAcumulado <- 0
            limpatela
            escreval("========== FUNCAO SOMA ==========")
            escreval ("Insira os valores e eles serao automaticamente somados")
            escreval ()
            escreval ("Quantos numeros deseja somar?")
            leia (vezes)
            valorAcumulado <- 0
            para contador de 1 ate vezes faça
               se valorAcumulado = 0 entao
                  escreval()
                  escreva ("Valor: ")
                  // Atribui o valor inserido a varivel 'valor'
                  leia (valor)
               senao
                  escreval()
                  escreval("Valor: ")
                  escreva (valorAcumulado, " + ")
                  // Atribui o valor inserido a varivel 'valor'
                  leia (valor)
               fimse

               // Realiza a convers?o da vari?vel caractere 'valorString' para inteiro
               valorAcumulado <- valorAcumulado + valor
               // Condi??o para que quando o usu?rio pressionar '=' o programa ir? finalizar e exibir o resultado da multiplicacaoo
            fimpara
            escreval()
            escreval("O Resultado final : ", valorAcumulado)
            Repetir()
         fimenquanto
         limpatela

      Caso 2

         repete <- 1
         enquanto repete = 1 faca
            valor <- 0
            valorAcumulado <- 0
            limpatela
            escreval("========== FUNCAO SUBTRACAO ==========")
            escreval ("Insira os valores e eles serao automaticamente subtraídos")
            escreval ()
            escreval ("Quantos numeros deseja subtrair?")
            leia (vezes)
            valorAcumulado <- 0
            para contador de 1 ate vezes faça
               se (contador = vezes) e (valorAcumulado = 0) entao
                  escreval("Valor: ")
                  escreva (valorAcumulado, " - ")
                  leia (valor)
                  valorAcumulado <- valorAcumulado - valor
                  interrompa
               fimse
               se valorAcumulado = 0 entao
                  escreval()
                  escreva ("Valor: ")
                  // Atribui o valor inserido a varivel 'valor'
                  leia (valorAcumulado)
               senao
                  escreval()
                  escreval("Valor: ")
                  escreva (valorAcumulado, " - ")
                  // Atribui o valor inserido a varivel 'valor'
                  leia (valor)
               fimse

               // Realiza a convers?o da vari?vel caractere 'valorString' para inteiro
               valorAcumulado <- valorAcumulado - valor
               // Condi??o para que quando o usu?rio pressionar '=' o programa ir? finalizar e exibir o resultado da multiplicacaoo
            fimpara
            escreval()
            escreval("O Resultado final : ", valorAcumulado)
            Repetir()
         fimenquanto
         limpatela

      Caso 3

         repete <- 1
         enquanto repete = 1 faca
            valor <- 0
            valorAcumulado <- 0
            limpatela
            escreval ("========== FUNCAO MULTIPLICACAO ==========")
            escreval ("Insira os valores e eles serao automaticamente multiplicados")
            escreval ()
            escreval ("Quantos numeros deseja multiplicar?")
            leia (vezes)
            valorAcumulado <- 0
            para contador de 1 ate vezes faça
               se valorAcumulado = 0 entao
                  repita
                     escreval()
                     escreva ("Valor: ")
                     // Atribui o valor inserido a varivel 'valor'
                     leia (valorAcumulado)
                     escreval()
                     se valorAcumulado = 0 entao
                        escreval("TODO VALOR MULTIPLICADO POR ZERO É ZERO!!")
                     fimse
                  ate valorAcumulado <> 0
                  valor <- 1
               senao
                  // Atribui o valor inserido a varivel 'valor'
                  repita
                     // Atribui o valor inserido a varivel 'valor'
                     escreval("Valor: ")
                     escreva (valorAcumulado, " x ")
                     leia (valor)
                     escreval()
                     se valor = 0 entao
                        escreval("TODO VALOR MULTIPLICADO POR ZERO É ZERO!!")
                        escreval()
                     fimse
                  ate valor <> 0
               fimse

               // Realiza a convers?o da vari?vel caractere 'valorString' para inteiro
               valorAcumulado <- valorAcumulado * valor
               // Condi??o para que quando o usu?rio pressionar '=' o programa ir? finalizar e exibir o resultado da multiplicacaoo
            fimpara
            escreval()
            escreval("O Resultado final : ", valorAcumulado)
            Repetir()
         fimenquanto
         limpatela
      Caso 4

         repete <- 1
         enquanto repete = 1 faca
            valor <- 0
            valorAcumulado <- 0
            limpatela
            escreval ("========== FUNCAO DIVISAO ==========")
            escreval ()
            escreval ("Quantos numeros deseja dividir?")
            leia (vezes)
            valorAcumulado <- 0
            para contador de 1 ate vezes faça
               se valorAcumulado = 0 entao
                  repita
                     escreval()
                     escreva ("Valor: ")
                     // Atribui o valor inserido a varivel 'valor'
                     leia (valorAcumulado)
                     escreval()
                     se valorAcumulado = 0 entao
                        escreval("ZERO DIVIDIDO POR QUALQUER VALOR É IGUAL A ZERO")
                     fimse
                  ate valorAcumulado <> 0
                  valor <- 1
               senao
                  // Atribui o valor inserido a varivel 'valor'
                  repita
                     // Atribui o valor inserido a varivel 'valor'
                     escreval("Valor: ")
                     escreva (valorAcumulado, " / ")
                     leia (valor)
                     escreval()
                     se valor = 0 entao
                        escreval("É IMPOSSIVEL REALIZAR A DIVISÃO POR ZERO")
                        escreval()
                     fimse
                  ate valor <> 0
               fimse

               // Realiza a convers?o da vari?vel caractere 'valorString' para inteiro
               valorAcumulado <- valorAcumulado / valor
               // Condi??o para que quando o usu?rio pressionar '=' o programa ir? finalizar e exibir o resultado da multiplicacaoo
            fimpara
            escreval()
            escreval("O Resultado final : ", valorAcumulado)
            Repetir()
         fimenquanto
         limpatela

      Caso 5


         repete <- 1
         enquanto repete = 1 faca
            limpatela
            escreval ("========== FUNCAO FATORIAL ==========")
            repita
               escreval("Insira um valor: ")
               leia(valor)
               se valor < 0 entao
                  escreval("NAO E POSSIVEL CALCULAR O FATORIAL DE VALORES NEGATIVOS")
                  escreval()
               fimse
            ate valor >= 0
            valorFat <- valor
            fatorial <- valor-1
            se valor = 0 entao
               valor <- 1
            senao
               repita
                  valor <- valor * fatorial
                  fatorial <- fatorial - 1
               ate (fatorial <= 1)
            fimse
            escreval()
            escreval("O Resultado do fatorial de", valorFat, " é :", valor)
            escreval()
            Repetir()

         fimenquanto
         limpatela

      Caso 6
         repete <- 1
         enquanto repete = 1 faca
            limpatela
            escreval ("========== FUNCAO DE SEGUNDO GRAU ==========")

            //mensagem para o usuario identificar os valores
            escreval ()
            escreval ("identifique os valores da funcao:")
            escreval ("f(x) = A.x^2 + B.x + C ")
            escreval ()

            //entrada dos valores da fun??o
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
            escreval("Valor de delta : ",delta)

            //calculo das raizes da fun??o
            se delta < 0 entao
               escreval ("nao existem raizes reais da funcao")
               escreval ()
            senao
               escreval()
               raizDelta <- RaizQuad(delta)
               raizFun1 <- ((-valorB) + (raizDelta))/(2*valorA)
               raizFun2 <- ((-valorB) - (raizDelta))/(2*valorA)
               escreval ("raiz x' : ", raizFun1:4:2)
               escreval ()
               escreval ("raiz x'' : ", raizFun2:4:2)
               escreval ()

            fimse

            //opcao do usu?rio para fazer a operacao novamente

            Repetir()

         fimenquanto
         limpatela

      Caso 7

         repete <- 1
         enquanto repete = 1 faca
            limpatela
            repita
               escreval ("======= CONVERSAO DE BASE NUMERICA: B10 X B2 / B2 X B10 =======")
               escreval("")
               escreval("Qual fun??o deseja utilizar?")
               escreval("1 <- Decimal para Binario")
               escreval("2 <- Binario para Decimal")
               escreval("3 <- Voltar ao Menu")
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
                     //adicionamos o 1 ou 0 ao binário
                     binarioString <- Numpcarac(resto) + binarioString
                     //dividimos o numero por 2
                     numero <- numero div 2
                  fimenquanto
               fimse
               //Ao fim do loop teremos uma sequencia de 1s e 0s que representa a conversão do número inicial
               escreval("Numero convertido: ", binarioString)
               escreval("")
            fimse

            se fun = 2 entao

               decimal <- 0
               potencia <- 0
               valido <- falso

               // Validar input ----------------------------------------------------------------------------------------------

               // Input comeca como invalido ? perguntado repetidademente at? que um input valido seja fornecido
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

               // Come?amos pelo ultimo numero binario.
               // Compr() retorna o tamanho de um texto.
               // Subtraimos 1 para que o numero nao ultrapasse o indice do texto.
               para index <- compr(binarioString) ate 1 passo -1 faca

                  // Quando o caractere atual for '1', somamos ele elevado à potência atual.
                  se  copia(binarioString, index, 1) = "1" entao
                     decimal <- int(decimal + (2 ^ potencia))
                  fimse

                  // Aumentamos em 1 a potência para utilizar na próxima iteração do loop.
                  potencia <- potencia + 1
               fimpara

               // Ao fim do loop, teremos todos os números somados na variável 'decimal',
               // que irá representar corretamente a conversão.

               escreval("O numero decimal ?: ", decimal)
               escreval("")
            fimse

            Repetir()

         fimenquanto
         limpatela

      Caso 8

         repete <- 1
         enquanto repete = 1 faca
            limpatela

            repita
               escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B8 / B8 X B2 =======")
               escreval("")
               escreval("Qual fun??o deseja utilizar?")
               escreval("1 <- Binario para Octal")
               escreval("2 <- Octal para Bin?rio")
               escreval("3 <-  Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2) ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            limpatela

            //====================================Fun??o 1==================================
            se Fun = 1 entao


               escreval("===== Conversor Binario -> Octal =====")
               escreval("")
               // Coleta o numero biario
               escreva("Digite um numero binario: ")
               leia(bi)
               num_digitos <- compr(bi)
               valPos <- num_digitos
SegVal <- 0
octal <- ""
dec <- 0

               // Loop para percorrer cada digito octal.
               para index <- 1 ate num_digitos faca
                  // Obtem o caractere octal atual.
                  parte_octal <- copia(bi, index, 1)

                  // Converte o caractere octal para inteiro.
                  escolha parte_octal
                  caso "0"
                     Num <- 0
                  caso "1"
                     Num <- 1
                  fimescolha

                  //Aqui seleconamos o valor da posição do numero binario
                  valPos <- valPos - 1

                  //E fazemos a conversão de caracter por caracter
                  SegVal <- SegVal + Num * 2 ^ (valPos)

               fimpara

               //Movemos o numero decimal para a variavel decimal
               dec <- SegVal

               enquanto dec >= 1 faça

                  //O binario é a sobra dos numero dividido por dois. O simbolo de porcentagem
                  //faz a divisão do numero por 2, porem pega o resto da operação

                  SegVal <- dec % 8

                  //O grande problema é que o numero binario é escrito ao contrato de como ele é
                  //calculado, então se o resultado da divizão for 0101, lemos o numero como 1010

                  //Por isso, transformei as sobras em texto e fui concatenando na variavel bi
                  //de forma que os numeros vão sendo concatenados a esquerda

                  se SegVal = 0 então
                     octal <- "0" + octal
                  fimse
                  se SegVal = 1 então
                     octal <- "1" + octal
                  fimse
                  se SegVal = 2 então
                     octal <- "2" + octal
                  fimse
                  se SegVal = 3 então
                     octal <- "3" + octal
                  fimse
                  se SegVal = 4 então
                     octal <- "4" + octal
                  fimse
                  se SegVal = 5 então
                     octal <- "5" + octal
                  fimse
                  se SegVal = 6 então
                     octal <- "6" + octal
                  fimse
                  se SegVal = 7 então
                     octal <- "7" + octal
                  fimse

                  dec <- dec / 8
               fimenquanto

               escreval("Numero convertido: ",octal)



            fimse
            //====================================Funcao 2==================================

            se fun = 2 entao

               octalReal <- 0

               escreval("===== Conversor Octal -> Binario =====")
               // Coleta o numero octal
               escreva("Digite um numero octal: ")
               leia(octal)
               num_digitos <- compr(octal)
               valPos <- num_digitos
SegVal <- 0
bi <- ""
dec <- 0

               // Loop para percorrer cada digito octal.
               para index <- 1 ate num_digitos faca
                  // Obtem o caractere octal atual.
                  parte_octal <- copia(octal, index, 1)

                  // Converte o caractere octal para inteiro.
                  escolha parte_octal
                  caso "0"
                     Num <- 0
                  caso "1"
                     Num <- 1
                  caso "2"
                     Num <- 2
                  caso "3"
                     Num <- 3
                  caso "4"
                     Num <- 4
                  caso "5"
                     Num <- 5
                  caso "6"
                     Num <- 6
                  caso "7"
                     Num <- 7
                  fimescolha

                  //Aqui seleconamos o valor da posição do numero octal
                  valPos <- valPos - 1

                  //E fazemos a conversão de caracter por caracter
                  SegVal <- SegVal + Num * 8 ^ (valPos)

               fimpara

               //Movemos o numero decimal para a variavel decimal
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

            Repetir()

         fimenquanto
         limpatela

      Caso 9

         repete <- 1
         enquanto repete = 1 faca

            repita
               limpatela
               escreval ("======= CONVERSAO DE BASE NUMERICA: B2 X B16 / B16 X B2 =======")
               escreval("")
               escreval("Qual funcao deseja utilizar?")
               escreval("1 <- Binario para Hexadecimal")
               escreval("2 <- Hexadecimal para Bin?rio")
               escreval("3 <- Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2) ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            limpatela

            //====================================Fun??o 1==================================
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

               // Come?amos pelo ultimo digito binario.
               para index <- numDigitos ate 1 passo -1 faca

                  // Quando o caractere atual for '1', somamos ele elevado a? potencia atual.
                  se copia(binarioString, index, 1) = "1" entao
                     decimal <- int(decimal + (2 ^ potencia))
                  fimse

                  // Incrementa a potencia para a proxima itera??oo.
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
               escreval("O numero binario ", binarioString, " em hexadecimal ?: ", hexadecimal)
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
               escreval("O numero hexadecimal ", hexadecimal, " em binario: ", binario)
            fimse

            escreval
            Repetir()

         fimenquanto
         limpatela

      Caso 10

         repete <- 1
         enquanto repete = 1 faca

            escreval("========== CONCATENACAO DE DUAS STRINGS ==========")
            escreval ()
            escreval("Digite o conteudo da primeira String:")
            leia(string1)
            escreval("Digite o conteudo da segunda String:")
            leia(string2)


            concat <- string1 + " " + string2

            escreval("A concatenacao das duas strings:")
            escreval (concat)
            escreval
            Repetir()

         fimenquanto
         limpatela

      Caso 11

         repete <- 1
         enquanto repete = 1 faca
            repita
               escreval ("======= CALCULO DE JUROS =======")
               escreval("")
               escreval("Qual funcao deseja utilizar?")
               escreval("1 <- Juros Simples")
               escreval("2 <- Juros Compostos")
               escreval("3 <- Voltar ao Menu")
               escreval("")
               escreva("Digite a sua resposta: ")
               leia(fun)
            ate (fun = 1) ou (fun = 2)ou (fun = 3)

            se fun = 3 entao
               limpatela
               interrompa
            fimse

            se fun = 1 entao
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
            Repetir()
            limpatela

         fimenquanto
         limpatela

      caso 12

         interrompa

      Outrocaso

         limpatela
         escreval ("Opcao Invalida, escolha uma opcao presente no menu!")
         escreval ()

      fimescolha

   ate func = 12
   escreval ("PROGRAMA ENCERRADO!")

Fimalgoritmo