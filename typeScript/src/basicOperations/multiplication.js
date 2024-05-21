var acVal = 1;
var valStr;
console.log("========== Multiplicação ==========");
console.log("Pressione 'F' para finalizar a operação");
while (true) {
    console.log();
    var valStr_1 = prompt("Valor: ");
    if (valStr_1 === null || valStr_1.toLowerCase() === 'f') {
        break;
    }
    var val = parseInt(valStr_1, 10);
    if (isNaN(val)) {
        console.log("Entrada inválida, por favor insira um número.");
        continue;
    }
    var acValStr = acVal;
    acVal = acVal * val;
    console.log("Resultado: ".concat(acValStr, " X ").concat(val, " = ").concat(acVal));
}
console.log("Opera\u00E7\u00E3o finalizada. Resultado final: ".concat(acVal));
