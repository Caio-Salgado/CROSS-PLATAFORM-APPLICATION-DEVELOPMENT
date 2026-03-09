//Variáveis em JavaScript
var nome = "joão"; // Variável global -> string
let idade = 25; // Variável de bloco -> number
let boolean = true; // Variável de bloco -> boolean
let nulo = null; // Variável de bloco -> nulo
const cidade = "São Paulo"; // Variável constante -> string imutável
let endereco; // Variável de bloco -> JavaScript define como undefined automaticamente

//Função normal
function saudacao() {
  let mensagem = "Olá, " + nome + "!"; // Variável local
  console.log(mensagem);
}
saudacao(); // Chama a função de saudação

//Arrow Function
const dobro = (numero) => numero * 2;
console.log(dobro(5)); //Não usamos a palavra function, quando há apenas uma linha, o return é automático

//Array
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã"
console.log(frutas.length); // 3
frutas.push("Uva"); // Adiciona ao fim

//Objeto
let pessoa = {
  nome: "Carlos",
  idade: 30,
  ativo: true,
};
console.log(pessoa.nome); // "Carlos"
console.log(pessoa["idade"]); // 30 (notação alternativa)

//if, else if, else
let hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

//Break e Continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Pula a iteração quando i é 2
  }
  if (i === 4) {
    break; // Encerra o loop quando i é 4
  }
  console.log(i); // Imprime os valores de i, exceto 2 e para quando chegar em 4
}

//Switch
let cor = "azul";
switch (cor) {
  case "vermelho":
    console.log("A cor escolhida foi vermelho.");
    break;
  case "azul":
    console.log("A cor escolhida foi azul.");
    break;
  default:
    console.log("Cor não reconhecida.");
}

//For
for (let i = 0; i < 5; i++) {
  // i++ -> soma 1 a cada repetição
  console.log("Contador:", i);
}

// While
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

// Tentando acessar variáveis fora do escopo
console.log(mensagem); // Erro: mensagem is not defined
console.log(status); // Erro: status is not defined

//Escopo de variáveis
let global = "Sou global";
function testarEscopo() {
  let local = "Sou local";
  console.log(global);
  console.log(local);
}
testarEscopo();
console.log(global);
// console.log(local); // Erro: local is not defined
//Variável global pode ser usada em qualquer lugar, Variável local só existe dentro da função

//Callback
function processar(callback) {
  console.log("Processando...");
  callback();
}
processar(() => console.log("Finalizado!"));
//Mostra "Processando..." e executa a função recebida ("callback()") como parâmetro, que imprime "Finalizado!" no console.

//Função assíncrona
async function pegarDados() {
  return "Dados recebidos!";
}
pegarDados().then(console.log);
//"async" indica que a função retorna uma promessa ".then()" recebe o resultado quando a função termina
