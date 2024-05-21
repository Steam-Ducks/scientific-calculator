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
    }

    const acValStr: number = acVal;
    acVal = acVal * val;

    console.log(`Resultado: ${acValStr} X ${val} = ${acVal}`);
}

console.log(`Operação finalizada. Resultado final: ${acVal}`);