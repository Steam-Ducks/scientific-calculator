import promptSync = require("prompt-sync");

const prompt = promptSync();

export function fatorial(): void {
    let x : number;
    console.log("");
    console.log("========== CÁLCULO FATORIAL ==========");
    console.log("");
    x = parseFloat(prompt("Escreva um número: "));

    let n = x;
    let resultado = 1;

    if(n < 0){
        console.log("Escreva um número maior ou igual a 0")
    }
    else{
        if(n = 0){}
        else{
            if (n = 1){}
            else{
                if (n >= 2) {
                    while (n >= 1) {
                        resultado *= n;
                        while (n >= 2) {
                            console.log(n, "x")
                        }
                        n--;
                    }
                }
            }
            
        }
    }
    console.log(`O fatorial de ${x} é ${resultado}.`);
}