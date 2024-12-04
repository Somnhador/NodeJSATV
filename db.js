//Lista de todos os produtos
const produtos = [
    {
        id: 1,
        nome: "Mouse",
        quantidade: 25,
        preco: 340.99
    },
    {
        id: 2,
        nome: "Teclado",
        quantidade: 3,
        preco: 180
    },
    {
        id: 3,
        nome: "HeadSet",
        quantidade: 70,
        preco: 202
    },
    {
        id: 4,
        nome: "Monitor",
        quantidade: 2,
        preco: 1417.85
    },
    {
        id: 5,
        nome: "Computador",
        quantidade: 8,
        preco: 4500
    }
];

//Adiciona um novo produto
function cadastrarProduto(produto) {
    produtos.push(produto);
}

//Lista de Produtos(Consulta todos os produtos)
function listaDeProdutos() {
    return produtos;
}

//Consulta produto por ID
function consultarProduto(id) {
    return produtos.find(c => c.id == id);
}

//Editar Produto
function editarProduto(id, dados) {
    const prodNovo = produtos.find(c => c.id == id);
    if (prodNovo) {
        prodNovo.nome = dados.nome;
        prodNovo.quantidade = dados.quantidade;
        prodNovo.preco = dados.preco;
    } else {
        return ("Erro!");
    }
}

//Deletar Produto
function deletarProduto(id) {
    const indice = produtos.findIndex(c => c.id == id);
    produtos.splice(indice, 1);
}

//Exportar as funções para o index
module.exports = {
    cadastrarProduto,
    listaDeProdutos,
    consultarProduto,
    editarProduto,
    deletarProduto
}