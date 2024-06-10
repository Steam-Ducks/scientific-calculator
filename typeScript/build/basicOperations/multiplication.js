"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplication = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function multiplication() {
  var value = 0;
  var accumulatedValue = 1; // Inicializamos com 1 porque é o elemento neutro da multiplicação
  console.log("");
  console.log("========== MULTIPLICAÇÃO ==========");
  console.log("");
  var counter = parseInt(prompt("Quantos números deseja multiplicar? "));
  if (isNaN(counter) || counter <= 0) {
    console.log("Por favor, insira um número válido de quantidades.");
    return;
  }
  for (var i = 1; i <= counter; i++) {
    console.log();
    value = parseFloat(prompt("Valor ".concat(i, ": ")));
    if (isNaN(value)) {
      console.log("Por favor, insira um número válido.");
      i--;
      continue;
    }
    accumulatedValue *= value;
  }
  console.log();
  var formattedValue = accumulatedValue.toFixed(2);
  console.log(
    "O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(formattedValue)
  );
}
exports.multiplication = multiplication;
