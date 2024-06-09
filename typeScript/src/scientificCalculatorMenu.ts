import promptSync from "prompt-sync";
import { soma } from "./basicOperations/addition";
import { subtraction } from "./basicOperations/subtraction";
import { multiplicacao } from "./basicOperations/multiplication";
import { divisao } from "./basicOperations/division";
import { funcaoSegundoGrau } from "./specialOperations/quadraticFunction";
import { compountInterest } from "./interest/compoundInterest";
import { simpleInterest } from "./interest/simpleInterest";
import { fatorial } from "./specialOperations/fatorial";
import { converterBinarioParaDecimal } from "./conversions/convertBinaryToDecimal";
import { converterDecimalParaBinario } from "./conversions/convertDecimalToBinary";
import { converterOctalparaBinario } from "./conversions/binariToOctalConverter";


export const prompt = promptSync();

let opcao: string;

do {
  console.clear();
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log(":                CALCULADORA CIENTIFICA                :");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log();
  console.log("Digite a função que deseja utilizar:");
  console.log();
  console.log("[1] SOMA");
  console.log("[2] SUBTRAÇÃO");
  console.log("[3] MULTIPLICAÇÃO");
  console.log("[4] DIVISÃO");
  console.log("[5] FATORIAL");
  console.log("[6] FUNCAO DE SEGUNDO GRAU");
  console.log("[7] CALCULO DE JUROS");
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
        console.log("TO DO");
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
  console.log("======= CALCULO DE JUROS =======");
  console.log("");
  console.log("Qual funcao deseja utilizar?");
  console.log("1 <- Juros Simples");
  console.log("2 <- Juros Compostos");
  console.log("");
  const resposta: string = prompt("Digite a sua resposta: ");

  switch (resposta) {
    case "1":
      simpleInterest();
      break;
    case "2":
      compountInterest();
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
  console.log("Qual funcao deseja utilizar?");
  console.log("1 <- B2 X B10");
  console.log("2 <- B10 X B2");
  console.log("--------------");
  console.log("3 <- B2 X B8");
  console.log("4 <- B8 X B2");
  console.log("--------------");
  console.log("5 <- B2 X B16");
  console.log("6 <- B16 X B2");
  console.log("");
  const resposta: string = prompt("Digite a sua resposta: ");

  switch (resposta) {
    case "1":
      converterBinarioParaDecimal();
      break;
    case "2":
      converterDecimalParaBinario();
      break;
    case "3":
      console.log("TO DO");
      break;
    case "4":
      converterOctalparaBinario();
      break;
    case "5":
      console.log("TO DO");
      break;
    case "6":
      console.log("TO DO");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
}