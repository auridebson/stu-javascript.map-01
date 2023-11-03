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

function calculaPrecoDesconto(itens) {
    const novosProdutos = itens.map(item => {
        const preco_descontado = parseFloat(item.preco-(item.preco*item.desconto))
        return {
            nome: item.nome,
            preco: item.preco,
            preco_descontado: preco_descontado
        }
    })
    return novosProdutos
}

let produtosDesc = calculaPrecoDesconto(produtos)

console.log(calculaPrecoDesconto(produtosDesc))

for (i in produtosDesc) {
    containerLista.innerHTML += produtosDesc[i].nome +" - R$ "+ produtosDesc[i].preco_descontado +"<br>"
}


