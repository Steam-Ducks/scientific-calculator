Algoritmo "Conversor Octal para Binario"

Var

   octal, parte_octal, bi: caractere
   num_digitos, index, Num: inteiro
   SegVal, valPos, dec: real

Inicio

   // Coleta o numero octal
   escreva("Digite um numero octal: ")
   leia(octal)
   num_digitos <- compr(octal)
   valPos <- num_digitos

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
   escreval("=========================================")

Fimalgoritmo