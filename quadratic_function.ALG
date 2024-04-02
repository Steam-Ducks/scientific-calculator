Algoritmo "Função de segundo grau"

Var
eq_a, eq_b, eq_c: inteiro
delta, R1, R2, rdelta: real
opt : caractere



Inicio
      // laço de repetição para a opção de fazer novamente
      opt<- "S"
      enquanto (opt = "S") ou (opt = "s") faça
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

              limpatela
              
              //calculo do valor de delta
              escreval ("----------------------------------")
              delta <- (eq_b*eq_b)-4*eq_a*eq_c
              escreval("o valor de delta é: ",delta)
              escreval ("----------------------------------")
      
              //calculo das raizes da função
              se delta < 0 então
                 escreval ("não existem raizes reais da função")
                 escreval ()
              senão
                 R1 <- ((-eq_b) + raizq(delta))/(2*eq_a)
                 R2 <- ((-eq_b) - raizq(delta))/(2*eq_a)
                 escreval ("----------------------------------")
                 escreval ("a raiz x' é: ", R1)
                 escreval ()
                 escreval ("a raiz x'' é: ", R2)
                 escreval ("----------------------------------")
                 escreval ()
              fimse
              
              //opção do usuário para fazer a operação novamente
              repita
                 escreval ("deseja fazer a operação novamente? (S/N)")
                 leia (opt)
              até (opt = "S") ou (opt = "N") ou (opt = "s") ou (opt = "n")
      fimenquanto
      
Fimalgoritmo