"use strict";
const produto1 = {
    // Letra minuscula = Variavel -> objeto da classe "Produtos"
    nome: "X-Burguer",
    preco: 28,
    disponivel: true,
};
const produto2 = {
    nome: "Coca-cola",
    preco: 5,
    disponivel: false,
};
//Função
function calcularTotal(quantidade, preco) {
    // "number" é o tipo do valor de retorno da função
    return quantidade * preco;
}
calcularTotal(2, 30);
// Um valor pode ser de mais de um tipo
let resultado = "Pedido confirmado!";
resultado = 404;
resultado = null; // todos válidos
