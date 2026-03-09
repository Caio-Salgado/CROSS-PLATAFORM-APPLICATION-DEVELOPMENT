//Classes
type Produtos = {
  // Letra maiuscula = Class
  nome: string;
  preco: number;
  disponivel: boolean;
};
const produto1: Produtos = {
  // Letra minuscula = Variavel -> objeto da classe "Produtos"
  nome: "X-Burguer",
  preco: 28,
  disponivel: true,
};
const produto2: Produtos = {
  nome: "Coca-cola",
  preco: 5,
  disponivel: false,
};

//Função
function calcularTotal(quantidade: number, preco: number): number {
  // "number" é o tipo do valor de retorno da função
  return quantidade * preco;
}
calcularTotal(2, 30);

//Interface
// Com type
type Usuario = {
  id: number;
  nome: string;
  email: string;
};
// Com interface
interface Pedido {
  id: number;
  usuario: Usuario; // um tipo dentro do outro
  itens: string[];
  total: number;
}

//tipos opcionais
type Cliente = {
  nome: string;
  email: string;
  endereco?: string; // opcional — pode ser string ou undefined
};

//Union Types
type Resposta = string | number | null;
// Um valor pode ser de mais de um tipo
let resultado: Resposta = "Pedido confirmado!";
resultado = 404;
resultado = null; // todos válidos

// React Native
// props -> são as propriedades que um componente recebe para personalizar seu comportamento ou aparência, e com React automaticamente tem o tipo "any", ou seja, aceita qualquer tipo de valor. Com TypeScript, podemos definir tipos específicos para as props, garantindo que o componente receba os dados corretos e evitando erros em tempo de execução.
// Props de um componente de card de produto
type CardProdutoProps = {
  nome: string;
  preco: number;
  disponivel: boolean;
  onPress: () => void; // função chamada ao clicar
};
