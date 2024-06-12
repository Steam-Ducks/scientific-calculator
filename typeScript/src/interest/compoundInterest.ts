import promptSync from 'prompt-sync';

const prompt = promptSync();


export function compoundInterest(): void {
    let montante: number;
    let capital: number;
    let taxa: number;
    let tempo: number;

    let i: number;
    let juros: number;

    console.log("");
    console.log("========== JUROS COMPOSTOS ==========");
    console.log("");
    capital = parseFloat(prompt("Capital inicial: "));
    if (isNaN(capital) || capital <= 0) {
        console.log("Por favor digite um valor válido. ");
    }
    taxa = parseFloat(prompt("Taxa de Juros/Mensal "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    i = taxa / 100
    tempo = parseFloat(prompt("Tempo/Meses: "));
    console.log("")

    //-------------------potenciação-----------------------------
    let fator: number = 1 + i;
    let potencia: number = 1;
    
    for (let k: number = 0; k < tempo; k++) {
        potencia *= fator;
    }
    //----------------------------------------------

    montante = capital * potencia
    juros = montante - capital
    

    console.log(`Capital Inicial: R$${capital.toFixed(2)}`);
    console.log("")
    console.log(`Taxa de Juros: ${taxa}%`);
    console.log("")
    console.log(`Tempo: ${tempo} meses`);
    console.log("")
    console.log(`Montante: R$${montante.toFixed(2)}`);
    console.log("")
    console.log(`Total em Juros: R$${juros.toFixed(2)}`);
}

