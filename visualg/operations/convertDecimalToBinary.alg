algoritmo "convert decimal to binary"


//Para converter de decimal para binário, precisamos dividir o número decimal
//sucessivamente por 2 e registrar os restos dessas divisões, que nos darão
//os dígitos binários, de trás para frente.

//então 13 convertido fica:

// 13 / 2 = 6   Resto: 1 (binário acaba aqui)
// 6 / 2 = 3    Resto: 0
// 3 / 2 = 1    Resto: 1
// 1 / 2 = 0    Resto: 1 (binário começa aqui)
// .            1101

var
    numero, resto: inteiro
    binario: caractere

inicio
    binario <- ""
    escreval("")
    escreva("Digite um numero para converter: ")
    leia(numero)

    se numero = 0 entao
        binario <- "0"
    senao
         //Iteramos enquanto o numero for > 0
        enquanto (numero > 0) faca
            //Salvamos o resto da divisao por 2
            resto <- numero MOD 2
            //adicionamos o 1 ou 0 ao binário
            binario <- Numpcarac(resto) + binario
            //dividimos o numero por 2
            numero <- numero div 2
        fimenquanto
    fimse
//Ao fim do loop teremos uma sequencia de 1s e 0s que representa a conversão do número inicial


    escreval("Binario: ", binario)
    escreval("")

fimalgoritmo
