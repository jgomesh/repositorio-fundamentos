// REQUISITO 1 RESOLVIDO COM O MAP RETORNA INFORMAÇOES GERAIS SOBRE O LIVRO
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const formatedBookNames = (objeto) => fullBooks = objeto.map((bookItem) => `${bookItem.name} - ${bookItem.genre} - ${bookItem.author.name}`);


// REQUISITO 2 RETORNA A IDADE DOS AUTORES QUANDO O LIVRO LANÔU
const nameAndAge = (objeto) => objeto.map((bookitem) => ({age: bookitem.releaseYear - bookitem.author.birthYear, author: bookitem.author.name})).sort((a , b) => a.age - b.age);

// REQUISITO 3 RETORNA OS OBJETOS DOS LIVROS DE FICCAO E FANTASIA 

const fantasyOrScienceFiction = (objeto) => objeto.filter((objetoitem) => (objetoitem.genre === 'Fantasia' || objetoitem.genre === 'Ficção Científica'));

// REQUISITO 4 FUNCAO RETORNA LIVROS COM MAIS DE 60 ABNOS

const oldBooksOrdered = (objeto) => objeto.filter((objetoitem) => (2022 - objetoitem.releaseYear) > 60).sort((a , b) => a.releaseYear - b.releaseYear);

// REQUISITO 5 RETORNA OS ATORES DE FICAO E FANTASIA

const fantasyOrScienceFictionAuthors = (objeto) =>fantasyOrScienceFiction(objeto).map((elemento) => elemento.author.name).sort();

// REQUISITO 6 RETORNA OS ITENS EM ORDEM ALFABETICA

const oldBooks = (item) => oldBooksOrdered(item).map((elemento) => elemento.name);

// REQUISITO 7 - ENCONTRA O AUTOR COM 3 INICIAIS NO NOME

const authorWith3DotsOnName = (objeto) => objeto.filter((item) => item.author.name.replace(/[A-Z, a-z]/g, '') === '...')[0].name;
