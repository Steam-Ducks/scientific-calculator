algoritmo "compound interest"
//teste comentario git
Var
   montante, capital, i, j: real
   t, taxa: inteiro

Inicio
    escreval ("Insira o valor do Capital inicial: ")
    leia (capital)
    escreval
    escreval ("Agora, insira a Taxa de Juros: ")
    leia (taxa)
    escreval
         i <- taxa/100
    escreval ("Escreva o tempo em meses: ")
    leia (t)
    escreval
         montante <- capital * (1+i)^t
         j <- montante - capital
    escreval
    escreval ("Seu Montante total final será:", " R$", montante:8:2)
    escreval
    escreval ("Total em Juros:", " R$", j:8:2)
fimalgoritmo
