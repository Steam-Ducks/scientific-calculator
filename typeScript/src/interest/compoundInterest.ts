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
    console.log("═════════════════════════════════════");
    console.log("           JUROS COMPOSTOS           ");
    console.log("");
    capital = numeroValido("Capital inicial: ");
    taxa = numeroValido("Taxa de Juros/Mensal: ");

    i = taxa / 100
    tempo = numeroValido("Tempo/Meses: ");
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
    

    console.log("");
    console.log("Resultado:");
    console.log(`• Capital Inicial: R$${capital.toFixed(2)}`);
    console.log(`• Taxa de Juros: ${taxa}%`);
    console.log(`• Tempo: ${tempo} meses`);
    console.log(`• Montante: R$${montante.toFixed(2)}`);
    console.log(`• Total em Juros: R$${juros.toFixed(2)}`);

    console.log("═════════════════════════════════════");

}

function numeroValido(texto: string): number {
    let numero: number;
    while (true) {
        const entrada = prompt(texto);

        if (/^-?\d+(\.\d+)?$/.test(entrada)) {
            numero = parseFloat(entrada);
            if (numero > 0) {
                break;
            }
        }
        
        console.log("Por favor, insira um número válido.");
        console.log();
    }
    return numero;
}
