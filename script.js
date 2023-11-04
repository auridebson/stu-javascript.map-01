const containerLista = document.querySelector(".container-lista")
const btnAciona = document.querySelector(".btnAciona")

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

// console.log(calculaPrecoDesconto(produtosDesc))

for (i in produtosDesc) {
    containerLista.innerHTML += produtosDesc[i].nome +" - R$ "+ produtosDesc[i].preco_descontado +"<br>"
}


// Dado um array de números, use map() para criar um novo array que contenha o 
// dobro de cada número no array original.

const listNumeros = [1,3,5,7,9,11,13,15,17,19]
const novoArr = listNumeros.map((elemento) => {
    let novoElemento = elemento*2
    return novoElemento
})


// Dado um array de palavras, use map() para criar um novo array 
// que contenha o comprimento de cada palavra no array original.
const palavras = ["Felicidade","Alegria","Positividade","Prosperidade","Paz","Saúde","Sorriso","Amor"]
const lenPalavra = palavras.map((palavra) => {
    let lenWord = palavra.length
    return lenWord
})

// Dado um array de objetos que contenham informações de produtos, use 
// map() para criar um novo array que contenha apenas os nomes dos produtos.
const newProducts = produtos.map( (produto) => {
    let nome = produto.nome
    alert(nome)
    return nome
})




btnAciona.addEventListener("click", newProducts)