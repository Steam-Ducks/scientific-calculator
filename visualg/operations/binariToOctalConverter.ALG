Algoritmo "Conversor Binario para Octal"

Var

   parte_octal, binario, octal: caractere
   num_digitos, index, Num: inteiro
   SegVal, valPos, dec: real

Inicio

   // Coleta o numero biario
   escreva("Digite um numero binario: ")
   leia(binario)
   num_digitos <- compr(binario)
   valPos <- num_digitos

   // Loop para percorrer cada digito octal.
   para index <- 1 ate num_digitos faca
      // Obtem o caractere octal atual.
      parte_octal <- copia(binario, index, 1)

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
   escreval("=========================================")

Fimalgoritmo