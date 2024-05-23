"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function subtraction() {
  var value = 0;
  var accumulatedValue = 0;
  console.log();
  var counter = parseInt(prompt("Quantos números deseja subtrair? "));
  accumulatedValue = 0;
  for (var i = 1; i <= counter; i++) {
    if (i === counter && accumulatedValue === 0) {
      console.log("Valor: ");
      process.stdout.write("".concat(accumulatedValue, " - "));
      value = parseFloat(prompt(""));
      accumulatedValue -= value;
      break;
    }
    if (accumulatedValue === 0) {
      console.log();
      process.stdout.write("Valor: ");
      accumulatedValue = parseFloat(prompt(""));
    } else {
      console.log();
      console.log("Valor: ");
      process.stdout.write("".concat(accumulatedValue, " - "));
      value = parseFloat(prompt(""));
    }
    accumulatedValue -= value;
  }
  console.log();
  console.log(
    "O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(accumulatedValue)
  );
}
exports.subtraction = subtraction;
