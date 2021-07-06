const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase() === "S"){
    console.log('Esses são os autores de fantasia disponíveis: ')
    console.log('Diana Wynne Jones', '/ Cassandra Clare', '/ Rick Riordan', '/ Lauren Kate', '/ Veronica Roth', '/ Christopher Paolini')

    const entradaAutores = readline.question('Qual autor(a) voce escolhe?: ')
    const retorno = livros.filter(livro => livro.autor === entradaAutores)
    
    console.table(retorno);
} else {
    const livrosOrdenadosPagina = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são os livros disponiveis:')
    console.table(livrosOrdenadosPagina)
}