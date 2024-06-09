import promptSync from 'prompt-sync';

const prompt = promptSync();

function somarStrings(string1: string, string2: string): string {
    return `${string1} ${string2}`;
}

// Função principal para receber entrada e exibir resultado
export function concatenacaoStrings(): void {
    console.log("========== Concatenação de Strings ==========");
    console.log("")
    const string1 = prompt("Digite a primeira string: ");
    const string2 = prompt("Digite a segunda string: ");
    
    const resultado = somarStrings(string1,string2);
    console.log("")
    console.log("Resultado:", resultado);
}

