Algoritmo "Fun��o de segundo grau"

Var
   eq_a, eq_b, eq_c: inteiro
   delta, R1, R2, rdelta, precisao, raiz, nraiz: real
   opt : caractere



Inicio

   //a precis�o define a quantidade de casas decimais que a raiz sera decomposta
   precisao <- 0.000001
   
   // la�o de repeti��o para a op��o de fazer novamente
   opt<- "S"
   enquanto (opt = "S") ou (opt = "s") fa�a
      limpatela

      //mensagem para o usuario identificar os valores
      escreval ("Calculo de fun��o do segundo grau!")
      escreval ()
      escreval ("identifique os valores da fun��o:")
      escreval ("f(x) = A.x^2 + B.x + C ")
      escreval ()

      //entrada dos valores da fun��o
      escreval ("-----------------------------------")
      escreva ("entre com o valor de A: ")
      leia (eq_a)
      escreva ("entre com o valor de B: ")
      leia (eq_b)
      escreva ("entre com o valor de C: ")
      leia (eq_c)
      escreval ("----------------------------------")

      limpatela

      //calculo do valor de delta
      escreval ("----------------------------------")
      delta <- (eq_b*eq_b)-4*eq_a*eq_c
      escreval("o valor de delta �: ",delta)
      escreval ("----------------------------------")

      //calculo das raizes da fun��o
      se delta < 0 ent�o
         escreval ("n�o existem raizes reais da fun��o")
         escreval ()
      sen�o
         //para calcular a raiz quadrada utilizamos o m�todo de m�dia aproimada
         //para come�ar decompomos a raiz por 2
         raiz <- delta / 2
         
         //procedimento de decomposi��o da raiz
         Enquanto raiz > precisao Fa�a
            nraiz <- (raiz + delta / raiz) / 2
            Se (raiz - nraiz) < precisao Ent�o
               raiz <- nraiz
               //assim que a raiz for decomposta at� a casa decimal definida
               //precis�o, interrompemos o processo
               Interrompa
            FimSe
            //definimos o valor de raiz de delta!
            raiz <- nraiz
            rdelta  <- raiz
         FimEnquanto

         R1 <- ((-eq_b) + (rdelta))/(2*eq_a)
         R2 <- ((-eq_b) - (rdelta))/(2*eq_a)
         escreval ("----------------------------------")
         escreval ("a raiz x' �: ", R1:4:2)
         escreval ()
         escreval ("a raiz x'' �: ", R2:4:2)
         escreval ("----------------------------------")
         escreval ()
      fimse

      //op��o do usu�rio para fazer a opera��o novamente
      repita
         escreval ("deseja fazer a opera��o novamente? (S/N)")
         leia (opt)
      at� (opt = "S") ou (opt = "N") ou (opt = "s") ou (opt = "n")
   fimenquanto

Fimalgoritmo