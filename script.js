let listaCompras = [
    {nome:'Sabão em pó', preco:15, desconto:0.2},
    {nome:'Detergente', preco:2.5, desconto:0.1},
    {nome:'Oleo', preco:7.5, desconto:0.2},
    {nome:'Sabonete', preco:4, desconto:0.25},
    {nome:'Creme dental', preco:2.9, desconto:0.15},
    {nome:'Bandeja de 30 ovos', preco:24, desconto:0.7},
    {nome:'Cerveja 330ml Heineken', preco:7, desconto:0.18}
]

function mostraNome(lista) {
    lista += lista.vlrComDesconto
    return lista.nome + " - " + parseInt(lista.preco * (1 - lista.desconto))
}

const resultado = listaCompras.map(mostraNome)

console.log(resultado)