Algoritmo "HEXADECIMAL PARA DECIMAL"

Var

valorHexadecimal: vetor[0..10] de caractere
i, ordem, decimal, tamanho, expoente: inteiro
multi, soma: real
hexadecimal: caractere

Inicio

//Pergunta quantos caracteres o numero Hexadecimal possui
escreval("====== Conversor Hexadecimal para Decimal ======")
escreval("Quantos caracteres possui o numero Hexadecimal?")
leia(tamanho)

limpatela

// O expoente recebe o numero de caracteres referente ao numero Hexadecimal
expoente <- tamanho

ordem <- 1

//Informa a ordem na qual o valor hexadecimal deve ser digitado
para i de 0 ate tamanho - 1 faca

escreva("Digite o ", ordem,"° digito do numero Hexadecimal:")
leia(valorHexadecimal[i])

//verifica se o digito informado esta correto
se (caracpnum(valorHexadecimal[i]) < 0) ou (caracpnum(valorHexadecimal[i]) > 9) entao
 escreva("O ", ordem,"° digito está incorreto por favor digite novamente:")
leia(valorHexadecimal[i])
fimse

ordem <- ordem + 1

//Mostra o valor hexadecimal que foi convertido no final
hexadecimal <- hexadecimal + valorHexadecimal[i]

//Como um numero Hexadecimal é a junção de numeros e caracteres essa parte transforma a string em numeros inteiros
   se (caracpnum(valorHexadecimal[i]) >= 0) ou (caracpnum(valorHexadecimal[i]) <= 9) entao
    decimal <- caracpnum(valorHexadecimal[i])
   fimse
   se (valorHexadecimal[i] = "A") ou (valorHexadecimal[i] = "a") entao
      decimal <- 10
   fimse
   se (valorHexadecimal[i] = "B") ou (valorHexadecimal[i] = "b") entao
      decimal <- 11
   fimse
   se (valorHexadecimal[i] = "C") ou (valorHexadecimal[i] = "c") entao
      decimal <- 12
   fimse
   se (valorHexadecimal[i] = "D") ou (valorHexadecimal[i] = "d") entao
      decimal <- 13
   fimse
   se (valorHexadecimal[i] = "E") ou (valorHexadecimal[i] = "e") entao
      decimal <- 14
   fimse
   se (valorHexadecimal[i] = "F") ou (valorHexadecimal[i] = "f") entao
      decimal <- 15
   fimse

// Converte o numero Hexadecimal em Decimal
expoente <- expoente - 1
multi <- decimal * 16 ^ expoente
soma <- soma + multi

fimpara

limpatela

escreval("Hexadecimal:", hexadecimal)
escreval("Convertido em Decimal:", soma)

Fimalgoritmo