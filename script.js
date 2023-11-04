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

const datas = ["07/10/1977","10/25/1999","05/19/2002","12/03/1980"]

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

// let produtosDesc = calculaPrecoDesconto(produtos)

// console.log(calculaPrecoDesconto(produtosDesc))

// for (i in produtosDesc) {
//     containerLista.innerHTML += produtosDesc[i].nome +" - R$ "+ produtosDesc[i].preco_descontado +"<br>"
// }


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
function newProducts() {
    containerLista.innerHTML = ""
    produtos.map( (produto) => {
    let nome = `<p>${produto.nome}</p>`
    containerLista.innerHTML += nome
    return nome
})
}

// Dado um array de números, use map() para criar um novo array que 
// contenha a raiz quadrada de cada número no array original.

function raizNumero() {
    containerLista.innerHTML = ""
    listNumeros.map((num) => {
    let newNumber = `<p>${num**2}</p>`
    containerLista.innerHTML += newNumber 
    return newNumber
})
} 

// Dado um array de nomes, use map() para criar um novo array que contenha os nomes em maiúsculas.
function convCase() {
    const newWords = palavras.map((palavra) => {
        palavra = palavra.toUpperCase()
        containerLista.innerHTML += `<p>${palavra}</p>`
        return palavra
    })
}


// Dado um array de datas no formato string, use map() para criar 
// um novo array que contenha objetos Date correspondentes a cada data.

function convData() {
    containerLista.innerHTML = ""
    const novasDatas = datas.map((data) => {
        let novaData = new Date(data)
        let dia = novaData.getDate()
        let mes = novaData.getMonth()+1
        let ano = novaData.getFullYear()

        containerLista.innerHTML += `<p>${dia}/${mes}/${ano}</p>`
        return novaData
    })
}



btnAciona.addEventListener("click", convData)