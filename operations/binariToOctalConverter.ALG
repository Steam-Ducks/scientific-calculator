Algoritmo "Conversor Binario -> Octal"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 3/31/2024
Var

   dec,SegVal:real
   Fun,alg,num,i: inteiro
   oct: caracter

Inicio

   // Este algaritimo vai primeiramente ler o numero binario, transforma-lo em decimal e após isso converte-lo para octal

   escreval("===== Conversor Binario -> Octal =====")


   i <- 1

   enquanto i < 2 faca
   oct <- ""
   SegVal <- 0
      // Primeiramente o algoritimo vai perguntar quantos caracteres o numero binario que será convertido tem.
      // Isso é por que para transformar um numero binario em decimal, utilizamos uma formula que utiliza a posição
      // de cada algaritimo do numero binario para fazer a conversão

      escreval("")
      escreval("Quantos algarismos tem o numero binario que sera convertido?")
      escreva("resposta: ")
      leia(alg)
      alg <- alg - 1

      // A posição de cada algarismo é informado pelo usuario e armazenado na variavel alg. As posições são contadas de 0 a n
      // Por conta disso, a posição do último algaritimo vai ser um menor do que o total informado pelo usuario.

      // Para que a primeira vez em que o algoritimo pedir o numero, esteja escrito "Escreva o primeiro numero", o primeiro algarismo
      // é solicitado fora do laço de repetição
      escreva("Escreva o primeiro algarismo: ")
      leia(Num)

      // A formula de binario para decimal é bem simples, fazemos a soma de cada algarismo do numero decimal após multiplicar por dois elevado a posição do algarismo.
      // Algarismo * 2 ^ posição.     A posição é contada de forma regressiva até 0, por exemplo um numero binario de 4 algarismos é contado da seguinte forma => 3210

      SegVal <- SegVal + Num * 2 ^ (alg)

      //Para calcular a proxima posição, subitraimos 1 da posição atual
      alg <- alg - 1

      // Os demais algarismos vão ser calculados dentro do laço de repetição. O laço se repete até que a posição seja menor que 0
      enquanto alg >= 0 faca
         escreva("Escreva o proximo algarismo: ")
         leia(Num)
         SegVal <- SegVal + Num * 2 ^ (alg)
         alg <- alg - 1
      fimenquanto

      // Com o numero binario traduzido para decimal, conseguimos calcular o numero octal

      dec <- SegVal

      //Para calcular o numero octal, basta somar os restos da divisão do numero decimal por oito

      enquanto dec >= 1 faca

         SegVal <- dec % 8

         // O numero octal é calculado de traz para frente, então o primeiro numero a ser calculado, vai ficar a direita

         se SegVal = 0 entao
            oct <- "0" + oct
         fimse
         se SegVal = 1 entao
            oct <- "1" + oct
         fimse
         se SegVal = 2 entao
            oct <- "2" + oct
         fimse
         se SegVal = 3 entao
            oct <- "3" + oct
         fimse
         se SegVal = 4 entao
            oct <- "4" + oct
         fimse
         se SegVal = 5 entao
            oct <- "5" + oct
         fimse
         se SegVal = 6 entao
            oct <- "6" + oct
         fimse
         se SegVal = 7 entao
            oct <- "7" + oct
         fimse

         dec <- dec / 8

      fimenquanto

      escreval("Numero convertido: ",oct)
      escreval("")

      Escreval ("Aperte: 1- Para SIM / 2- Para N�O ")
      Leia (i)
      
      fimenquanto

Fimalgoritmo
