import promptSync from "prompt-sync";
import { soma } from "./basicOperations/addition";
import { subtraction } from "./basicOperations/subtraction";
import { multiplicacao } from "./basicOperations/multiplication";
import { divisao } from "./basicOperations/division";
import { funcaoSegundoGrau } from "./specialOperations/quadraticFunction";
import { compoundInterest } from "./interest/compoundInterest";
import { simpleInterest } from "./interest/simpleInterest";
import { fatorial } from "./specialOperations/fatorial";
import { converterBinarioParaDecimal } from "./conversions/convertBinaryToDecimal";
import { converterDecimalParaBinario } from "./conversions/convertDecimalToBinary";
import { converterOctalparaBinario } from "./conversions/converterOctalToBinary";
import { converterBinarioparaOctal } from "./conversions/converterBinaryToOctal";
import { converterBinarioParaHexadecimal } from "./conversions/convertBinaryToHexadecimal";
import { converterHexadecimalParaBinario } from "./conversions/convertHexadecimalToBinary";
import { concatenacaoStrings } from "./specialOperations/stringConcatenation";

export const prompt = promptSync();

let opcao: string;

do {
  console.clear();
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log(":                CALCULADORA CIENTÍFICA                :");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log();
  console.log("Digite a opção desejada: ");
  console.log();
  console.log("[1] SOMA");
  console.log("[2] SUBTRAÇÃO");
  console.log("[3] MULTIPLICAÇÃO");
  console.log("[4] DIVISÃO");
  console.log("[5] FATORIAL");
  console.log("[6] FUNÇÃO DE SEGUNDO GRAU");
  console.log("[7] CÁLCULO DE JUROS");
  console.log("[8] CONVERSÃO DE BASE");
  console.log("[9] CONCATENAÇÃO DE STRINGS");
  console.log("[10] SAIR");
  console.log();
  opcao = prompt("Opção desejada: ");

  switch (opcao) {
    case "1":
      do {
        soma();
      } while (repetirOperacao());
      break;
    case "2":
      do {
        subtraction();
      } while (repetirOperacao());
      break;
    case "3":
      do {
        multiplicacao();
      } while (repetirOperacao());
      break;
    case "4":
      do {
        divisao();
      } while (repetirOperacao());
      break;
    case "5":
      do {
        fatorial();
      } while (repetirOperacao());
      break;
    case "6":
      do {
        funcaoSegundoGrau();
      } while (repetirOperacao());
      break;
    case "7":
      do {
        selecionarTipoJuros();
      } while (repetirOperacao());
      break;
    case "8":
      do {
        selecionarConversao();
      } while (repetirOperacao());
      break;
    case "9":
      do {
        concatenacaoStrings();
      } while (repetirOperacao());
      break;
    case "10":
      console.log("PROGRAMA ENCERRADO!");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }

  if (opcao !== "10") {
    prompt("Pressione Enter para continuar...");
  }
} while (opcao !== "10");

function repetirOperacao(): boolean {
  console.log();
  const resposta: string = prompt("Deseja repetir a mesma operação? (S/N): ");
  console.log();
  return resposta.toUpperCase() === "S";
}

function selecionarTipoJuros(): void {
  console.clear();
  console.log("======= CÁLCULO DE JUROS =======");
  console.log("");
  console.log("Digite a opção desejada: ");
  console.log("[1] JUROS SIMPLES");
  console.log("[2] JUROS COMPOSTOS");
  console.log("");
  const resposta: string = prompt("Opção desejada: ");

  switch (resposta) {
    case "1":
      simpleInterest();
      break;
    case "2":
      compoundInterest();
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
}

function selecionarConversao(): void {
  console.clear();
  console.log("======= CONVERSÃO DE BASE =======");
  console.log("");
  console.log("Digite a opção desejada: ");
  console.log("[1] BINÁRIO X DECIMAL");
  console.log("[2] DECIMAL X BINÁRIO");
  console.log("--------------");
  console.log("[3] BINÁRIO X OCTAL");
  console.log("[4] OCTAL X BINÁRIO");
  console.log("--------------");
  console.log("[5] BINÁRIO X HEXADECIMAL");
  console.log("[6] HEXADECIMAL X BINÁRIO");
  console.log("");
  const resposta: string = prompt("Digite a opção desejada: ");

  switch (resposta) {
    case "1":
      converterBinarioParaDecimal();
      break;
    case "2":
      converterDecimalParaBinario();
      break;
    case "3":
      converterBinarioparaOctal();
      break;
    case "4":
      converterOctalparaBinario();
      break;
    case "5":
      converterBinarioParaHexadecimal();
      break;
    case "6":
      converterHexadecimalParaBinario();
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
}
