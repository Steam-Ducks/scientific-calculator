Algoritmo "Conversor Octal -> Binario"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 3/31/2024
Var


   i,segval,Num,alg,dec: Real
   bi: caracter




Inicio

   escreval("===== Conversor Octal -> Binario =====")


   i <- 1

   enquanto i < 2 faca
      SegVal <- 0
      bi <- ""
      //Para transformarmos o binario em decimal, devemos multiplicar cada dígito
      //pela potência de 2 relativa à posição por ele ocupada e somar os resultados
      //A posição é contada de trás para frente até o numero 0
      // então se o numero for 1010 as posições são respectivamente 3210

      escreval("")
      escreval("Quantos algarismos tem o numero octal que será convertido?")
      escreva("resposta: ")
      leia(alg)
      alg <- alg - 1

      //Como o algoritimo conta 0 como numero, a posição do primeiro algoritimo
      //é um numero menor do que a quantidade de algoritimos no total

      escreva("Escreva o primeiro algarismo: ")
      leia(Num)

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


      Escreval()
      escreval("============================================")
      Escreval()
      Escreval ("Aperte: 1- Para SIM / 2- Para NÃO ")
      Leia (i)

   fimenquanto

Fimalgoritmo