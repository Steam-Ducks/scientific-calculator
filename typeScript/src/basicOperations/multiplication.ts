let acVal: number = 1;
let valStr: string;

console.log("========== Multiplicação ==========");
console.log("Pressione 'F' para finalizar a operação");

while (true) {
    console.log();
    const valStr: string | null = prompt("Valor: ");

    if (valStr === null || valStr.toLowerCase() === 'f') {
        break;
    }

    const val: number = parseInt(valStr, 10);

    if (isNaN(val)) {
        console.log("Entrada inválida, por favor insira um número.");
        continue;
// Função principal para executar a calculadora
function calculadora(): void {
    let continuar = true;

    while (continuar) {
        try {
            const num1: number = obterNumero("Insira o primeiro número: ");
            const num2: number = obterNumero("Insira o segundo número: ");

            const resultado: number = multiplicar(num1, num2);
            console.log(`A multiplicação de ${num1} e ${num2} é: ${resultado}`);

            const resposta: string = prompt("Quer continuar? Sim ou Não: ").toLowerCase();

            if (resposta === "não" || resposta === "nao" || resposta === "n") {
                continuar = false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    const acValStr: number = acVal;
    acVal = acVal * val;

    console.log(`Resultado: ${acValStr} X ${val} = ${acVal}`);
}

console.log(`Operação finalizada. Resultado final: ${acVal}`);