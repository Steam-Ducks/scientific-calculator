import promptSync from "prompt-sync";
import { soma } from "./basicOperations/addition";
import { subtraction } from "./basicOperations/subtraction";
import { multiplication } from "./basicOperations/multiplication";
import { divisao } from "./basicOperations/division";
import { funcaoSegundoGrau } from "./specialOperations/quadraticFunction";
import { compoundInterest } from "./interest/compoundInterest";
import { simpleInterest } from "./interest/simpleInterest";
import { fatorial } from "./specialOperations/fatorial";
import { converterBinarioParaDecimal } from "./conversions/convertBinaryToDecimal";
import { converterDecimalParaBinario } from "./conversions/convertDecimalToBinary";
import { converterOctalparaBinario } from "./conversions/convertOctalToBinary";
import { converterBinarioparaOctal } from "./conversions/convertBinaryToOctal";
import { converterBinarioParaHexadecimal } from "./conversions/convertBinaryToHexadecimal";
import { converterHexadecimalParaBinario } from "./conversions/convertHexadecimalToBinary";
import { concatenacaoStrings } from "./specialOperations/stringConcatenation";

export const prompt = promptSync();

let opcao: string;

do {
  console.clear();
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║         ➕ ➖  CALCULADORA CIENTÍFICA ✖️  ➗        ║");
  console.log("║                                                    ║");
  console.log("║ Digite a opção desejada:                           ║");
  console.log("║                                                    ║");
  console.log("║ [1] SOMA                                           ║");
  console.log("║ [2] SUBTRAÇÃO                                      ║");
  console.log("║ [3] MULTIPLICAÇÃO                                  ║");
  console.log("║ [4] DIVISÃO                                        ║");
  console.log("║ [5] FATORIAL                                       ║");
  console.log("║ [6] FUNÇÃO DE SEGUNDO GRAU                         ║");
  console.log("║ [7] CÁLCULO DE JUROS                               ║");
  console.log("║ [8] CONVERSÃO DE BASE                              ║");
  console.log("║ [9] CONCATENAÇÃO DE STRINGS                        ║");
  console.log("║ [0] SAIR                                           ║");
  console.log("╚════════════════════════════════════════════════════╝");
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
        multiplication();
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
      selecionarTipoJuros();
      break;
    case "8":
      selecionarConversao();
      break;
    case "9":
      do {
        concatenacaoStrings();
      } while (repetirOperacao());
      break;
    case "0":
      console.log("");
      console.log("PROGRAMA ENCERRADO!");
      console.log("Obrigada por usar nossa calculadora! ☻");
      console.log("");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }

  if (opcao !== "0") {
    prompt("Pressione Enter para continuar...");
  }
} while (opcao !== "0");

function repetirOperacao(): boolean {
  console.log();
  const resposta: string = prompt("Deseja repetir a mesma operação? (S/N): ");
  console.log();
  return resposta.toUpperCase() === "S";
}

function selecionarTipoJuros(): void {
  console.clear();
  console.log("╔═════════════════════════════════════╗");
  console.log("║          CÁLCULO DE JUROS           ║");
  console.log("║                                     ║");
  console.log("║ Digite a opção desejada:            ║");
  console.log("║                                     ║");
  console.log("║ [1] JUROS SIMPLES                   ║");
  console.log("║ [2] JUROS COMPOSTOS                 ║");
  console.log("║ [0] SAIR                            ║");
  console.log("╚═════════════════════════════════════╝");
  console.log("");
  const resposta: string = prompt("Opção desejada: ");

  switch (resposta) {
    case "1":
      do {
        simpleInterest();
      } while (repetirOperacao());
      break;
    case "2":
      do {
        compoundInterest();
      } while (repetirOperacao());
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
}


function selecionarConversao(): void {
  console.clear();
  console.log("╔═════════════════════════════════════╗");
  console.log("║          CONVERSÃO DE BASE          ║");
  console.log("║                                     ║");
  console.log("║ Digite a opção desejada:            ║");
  console.log("║                                     ║");
  console.log("║ [1] BINÁRIO X DECIMAL               ║");
  console.log("║ [2] DECIMAL X BINÁRIO               ║");
  console.log("║ ----------------------------------- ║");
  console.log("║ [3] BINÁRIO X OCTAL                 ║");
  console.log("║ [4] OCTAL X BINÁRIO                 ║");
  console.log("║ ----------------------------------- ║");
  console.log("║ [5] BINÁRIO X HEXADECIMAL           ║");
  console.log("║ [6] HEXADECIMAL X BINÁRIO           ║");
  console.log("║ ----------------------------------- ║");
  console.log("║ [0] SAIR                            ║");
  console.log("╚═════════════════════════════════════╝");
  console.log("");
  const resposta: string = prompt("Opção desejada: ");

  switch (resposta) {
    case "1":
      do {
        converterBinarioParaDecimal();
      } while (repetirOperacao());
      break;
    case "2":
      do {
        converterDecimalParaBinario();
      } while (repetirOperacao());
      break;
    case "3":
      do {
        converterBinarioparaOctal();
      } while (repetirOperacao());
      break;
    case "4":
      do {
        converterOctalparaBinario();
      } while (repetirOperacao());
      break;
    case "5":
      do {
        converterBinarioParaHexadecimal();
      } while (repetirOperacao());
      break;
    case "6":
      do {
        converterHexadecimalParaBinario();
      } while (repetirOperacao());
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      break;
  }
}

