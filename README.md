<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

 
<div align="center">
    <img src="assets/capa-readme.png" alt="capa-readme" width="100%" />
</div>

<br />

<p>Como estudantes do 1º semestre do curso de Banco de Dados na FATEC SJC, estamos dedicados ao desenvolvimento do projeto "Calculadora Científica" neste repositório. O projeto visa oferecer implementações de uma ampla variedade de operações matemáticas, inicialmente em VisualG (Sprint 1 e Sprint 2) e em Typescript (Sprint 3 e Sprint 4).</p>

## Índice

♦ [Operações Disponíveis](#operações-disponíveis) <br />
♦ [Integrantes do projeto](#integrantes-do-projeto) <br />
♦ [Backlog do Produto](#backlog-do-produto) <br />
♦ [Validações feitas com o Cliente](#validações-feitas-com-o-cliente) <br />
♦ [Requisitos de Permanência](#requisitos-de-permanência) <br />
♦ [Tecnologias Utilizadas](#tecnologias-utilizadas) <br />
♦ [Como Usar](#como-usar) <br />
♦ [Boas práticas](#boas-práticas) <br />
♦ [Contato](#contato) <br />
    
## Operações Disponíveis
   <ol>
        <li>Operações Básicas: Implementações das operações básicas de soma, multiplicação, subtração e divisão.</li>
        <li>Cálculo Fatorial: Implementação da operação de cálculo do fatorial de um número.</li>
        <li>Função de Segundo Grau: Implementação da operação de cálculo de função de segundo grau.</li>
        <li>Conversão de Base Numérica: Implementação de operações de conversão entre diferentes bases numéricas (B10 X B2 / B2 x B10 / B2 x B8 / B8 x B2 / B2 x B16 / B16 x B2).</li>
        <li>Concatenação de Strings: Implementação da função para concatenar duas strings.</li>
        <li>Juros Simples e Juros Compostos: Implementação das operações de cálculo de juros simples e juros compostos.</li>
    </ol>
   
## Integrantes do projeto
  
<div align="center">
  <img src="assets/integrantes.png" alt="Equipe e funções" width="600px" />
</div>

## Backlog do Produto
<a href="https://docs.google.com/spreadsheets/d/1PA5yh4sCJ6KSowhACZ4_-C3lhVtEf_mpU07Nn4njLW8/edit?usp=sharing" target="_blank">♦ Backlog Dinâmico</a>

| Sprint | ID | Status | Descrição                                                             | Priorização | Nível de priorização |
|--------|----|----|-----------------------------------------------------------------------|-------------|----------------------|
| 1      | 1  | ✅ | Operações Básicas (Soma, Subtração, Multiplicação, Divisão)          | ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) Alta  |1       |
| 1      | 2  | ✅ | Cálculo Fatorial                                                      | ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) Alta  |2       |
| 1      | 3  | ✅ | Função de 2º grau                                                     | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |3      |
| 1      | 4  | ✅ | Função de Juros Simples                                               | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |4      |
| 1      | 5  | ✅ | Função de Juros Composto                                              | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |5      |
| 1      | 6  | ✅ | Conversão de base numérica - B2 X B16 / B16 X B2                      | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |7      |
| 2      | 7  | ✅ | Conversão de base numérica - B10 X B2 / B2 X B10                      | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |8      |
| 2      | 8  | ✅ | Conversão de base numérica - B2 X B8 / B8 X B2                        | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |9      |
| 2      | 9  | ✅ | Função de concatenação de 2 strings                                   | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |6      |
| 3      | 10 | ✅ | Conversão para Typescript - Operações Básicas (Soma, Subtração, Multiplicação, Divisão) | ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) Alta  |10      |
| 3      | 14 | ✅ | Conversão para Typescript - Cálculo Fatorial                          | ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) Alta  |11      |
| 3      | 15 | ✅ | Conversão para Typescript - Função de 2º grau                         | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |12      |
| 3      | 16 | ✅ | Conversão para Typescript - Função de Juros Simples                   | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |13      |
| 3      | 17 | ✅ | Conversão para Typescript - Função de Juros Composto                  | ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+) Média |14      |
| 4      | 18 | ✅ | Conversão para Typescript - Conversão de base numérica - B2 X B16 / B16 X B2 | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |16      |
| 4      | 19 | ✅ | Conversão para Typescript - Conversão de base numérica - B10 X B2 / B2 X B10 | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |17      |
| 4      | 20 | ✅ | Conversão para Typescript - Conversão de base numérica - B2 X B8 / B8 X B2 | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |18      |
| 4      | 21 | ✅ | Conversão para Typescript - Função de concatenação de 2 strings        | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) Baixa |15      |

## Validações feitas com o Cliente

| Sprint | Validações | Respostas |
|------------|------------|-----------|
| 1          | Podemos entregar o menu funcional na Sprint 1? | Claro |
| 1          | As operações matemáticas que precisamos fazer (por enquanto em visualg), nós devemos considerar uma quantidade n de números ou nessa lógica consideramos 2 apenas? | Pode ser uma decisão de vocês, pensem na usabilidade do produto. |
| 2          | A Interface gráfica é obrigatória? Se sim, existe alguma exigência de como deve ser? | Não é obrigatório, nem requisito. |
| 2          | Quando formos dividir algo por 0, qual mensagem de erro deve retornar? | Tratar o erro, explicando divisão por 0. |
| 2          | Opções de menu: 1. Menu geral com todas as opções de operações; 2. Menu compacto com sub-menu de operações básicas. | Menu geral e sub-menu dentro das operações (ex: quantos números quer somar?). |
| 2          | Problema de caracteres: Visualg não reconhece acentos, tem problema manter o código sem esses acentos? Não influencia na compreensão. | Remover todos os acentos. |
| 3          | Durante a Sprint 3 podemos acoplar as operações básicas e um só menu? | Sim |
| 3          | Podemos acoplar em 1 menu, as conversões de base? | Não |
| 3          | Podemos usar a função math.pow ou precisamos cria-la? | Criar a função |
| 4          | Podemos manter no nosso menu principal, um sub-menu dentro de juros, ou seja, o usuário escolhe se vai querer acessar, simples ou composto | Sim |
| 4          | Para sprint 3, não podíamos juntar as conversões de base num sub-menu, podemos criar esse sub-menu nessa última sprint pro menu ficar mais organizado? | Pode |

## Requisitos de Permanência
Conversamos sobre alguns pontos importantes para que ninguém seja retirado do grupo e eles podem se atualizar durante o desenvolvimento do projeto.
- Reunião fixa: todas as quintas-feiras (na primeira aula: 18h45);
- Cursos obrigatórios: Git e GitHub e Algoritmos (com Guanabara);
- Faltas: 1 falta por Sprint NO MÁXIMO (SEMPRE justificar ausências);
- Trello: mantenha seus cards atualizados, se tiver alguma dificuldade, converse com o grupo;
- Comunicação: sempre se comunique com o grupo pelo Whatsapp, pessoalmente ou pelo Trello, ta dificil, ta travado, descobriu algo legal, COMUNIQUE;
- Prazos: se atente aos prazos, lembre-se o projeto é importante para nossa conclusão do 1º semestre, estamos contando com você!

## Tecnologias Utilizadas

![VisualG](https://img.shields.io/badge/VisualG-333333?style=for-the-badge&logo=visualstudio)
![Git](https://img.shields.io/badge/Git-333333?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-333333?style=for-the-badge&logo=github)
![TypeScript](https://img.shields.io/badge/TypeScript-333333?style=for-the-badge&logo=typescript)
![Trello](https://img.shields.io/badge/Trello-333333?style=for-the-badge&logo=trello)
![Scrum](https://img.shields.io/badge/Scrum-333333?style=for-the-badge&logo=scrum)
![Discord](https://img.shields.io/badge/Discord-333333?style=for-the-badge&logo=discord)

## Como Usar
<ol>
    <li>Clone o repositório:</li>
</ol>
<pre><code>git clone https://github.com/seu_usuario/repo-operacoes-matematicas.git</code></pre>
<ol start="2">
    <li>Abra o código-fonte no VisualG.</li>
    <li>Execute o programa e siga as instruções para utilizar as operações desejadas.</li>
    <li>Após fazer alterações nos arquivos, adicione-os ao controle de versão:</li>
</ol>
<pre><code>git add .</code></pre>
<ol start="5">
    <li>Faça um commit das mudanças com uma mensagem descritiva:</li>
</ol>
<pre><code>git commit -m "Adiciona implementação da função de cálculo fatorial"</code></pre>
<ol start="6">
    <li>Envie as alterações para o repositório remoto:</li>
</ol>
<pre><code>git push origin main</code></pre>

 ## Boas práticas

 1. Sempre nomeie arquivos, funções ou funcionalidades utilizando camelCase é uma convenção de nomenclatura, onde as palavras são unidas sem espaços e cada palavra subsequente é capitalizada, exceto a primeira, como por exemplo o próprio nome da convenção: camelCase.
 2. Ao dar nome aos arquivos, funções ou ao fazer os commits, faça em inglês para exercitar o idioma e também é amplamente aceito como a língua padrão na indústria de tecnologia e programação. Usar nomes em inglês ajuda a manter a consistência e a interoperabilidade entre diferentes projetos e equipes ao redor do mundo.
 3. Ao realizar os commits utilize o pradrão: emoji + tipo do commit + breve descrição do que foi feito, se tiver dúvidas, dê uma olhada no repositório: 
[**Padrões de Commits**](https://github.com/arafaellacruz/padroes-de-commits)

## Contato

Se você tiver alguma dúvida, sugestão ou apenas quiser trocar uma ideia, sinta-se à vontade para me enviar um e-mail em [steamduckss@gmail.com](mailto:steamduckss@gmail.com). 
Estamos ansiosos para ouvir de você!

<div align="center">
    <img src="assets/footer.new.png" alt="footer" width="100%" />
</div>

</body>
</html>
