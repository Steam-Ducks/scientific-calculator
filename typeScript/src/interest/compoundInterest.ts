import promptSync from 'prompt-sync';

const prompt = promptSync();


export function compountInterest(): void {
    let montante: number;
    let capital: number;
    let taxa: number;
    let tempo: number;

    let i: number;
    let juros: number;

    console.log("");
    console.log("========== JUROS COMPOSTOS ==========");
    console.log("");
    capital = parseFloat(prompt("Insira o valor do Capital inicial: "));
    console.log("")
    taxa = parseFloat(prompt("Agora, insira a Taxa de Juros: "));
    console.log("")

    i = taxa / 100
    tempo = parseFloat(prompt("Escreva o tempo em meses: "));
    console.log("")

    //-------------------potenciação-----------------------------
    let fator = 1 + i;
    let potencia = 1;
    
    for (let k = 0; k < tempo; k++) {
        potencia *= fator;
    }
    //----------------------------------------------

    montante = capital * potencia
    juros = montante - capital
    console.log("")
    console.log("Seu Montante total final será: R$", montante.toFixed(2))
    console.log("")
    console.log("Total em Juros:", " R$", juros.toFixed(2))

}

