const containerLista = document.querySelector(".container-lista")

const produtos = [
    {nome:'Sabão em pó', preco:15, desconto:0.2},
    {nome:'Detergente', preco:2.5, desconto:0.1},
    {nome:'Oleo', preco:7.5, desconto:0.2},
    {nome:'Sabonete', preco:4, desconto:0.25},
    {nome:'Creme dental', preco:2.9, desconto:0.15},
    {nome:'Bandeja de 30 ovos', preco:24, desconto:0.7},
    {nome:'Cerveja 330ml Heineken', preco:7, desconto:0.18}
]

function calculaPrecoDesconto(produtos) {
    const produtosComDesconto = produtos.map(produto => {
        const vlrComDesconto = produto.preco*(1-produto.desconto)
        const vlrDesconto = produto.preco - (produto.preco*(1-produto.desconto))
        return {
            nome: produto.nome,
            preco: produto.preco,
            desconto: produto.desconto,
            vlrDesconto: vlrDesconto,
            vlrComDesconto: vlrComDesconto
        }
    })
    return produtosComDesconto
} //fim da função de adição de novo dado no array

function calculaPrecoDesconto2(itens) {
    const novosProdutos = itens.map((item) => {
        const preco_descontado = item.preco-(item.preco*item.desconto)
        return {
            nome:item.nome,
            preco:item.preco,
            desconto:item.desconto,
            preco_descontado:preco_descontado
        }
    })
    return novosProdutos
}

function calculaPrecoDesconto3(itens) {
    const novosProdutos = itens.map(item => {
        const preco_descontado = parseInt(item.preco-(item.preco*item.desconto))
        return {
            nome: item.nome,
            preco: item.preco,
            preco_descontado: preco_descontado
        }
    })
    return novosProdutos
}


let novoArray = calculaPrecoDesconto3(produtos)

console.log(calculaPrecoDesconto3(novoArray))
for (i in novoArray) {
    console.log(novoArray[i])
}

