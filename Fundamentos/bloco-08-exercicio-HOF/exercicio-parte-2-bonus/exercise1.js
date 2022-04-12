const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1947,
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
      birthYear: 1945,
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

// Adicione o código do exercício aqui:

// ACHE UM LIVRE PELA IDADE DE NASCIMENTO
function authorBornBook(years) {
  // escreva aqui o seu código
  const booksFounder = books.find((element) => element.author.birthYear === years);
  return booksFounder.name;
}

console.log(authorBornBook(1947));

// RETORNE O LIVRO COM MENOR NOME

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  let menosLetras = books[0].name.length;
  books.forEach((element) => {
    if(menosLetras > element.name.length){
      menosLetras = element.name.length
      nameBook = element.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName())

// ENCONTRE O PRIMEIRO LIVRO QUE O NOME TEM 26 Caracteres

function getNamedBook(num) {
  // escreva aqui o seu código
  const booksFound = books.find((element) => element['name'].length === num);
  return booksFound;
}

console.log(getNamedBook(26));

// ORDENANDO OS LIVROS POR ORDEM DE LANÇAMENTO

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((elemento1, elemento2) => elemento2['releaseYear'] - elemento1['releaseYear'])
}

console.log(booksOrderedByReleaseYearDesc())

// VEJA SE TODAS NASCERAM NO SECULO 20


function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear <= 2000 && element.author.birthYear >= 1901)
}
console.log(everyoneWasBornOnSecXX())

// VEJA SE ALGUM LIVRO È DA DECADA DE 80

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((element) => element.releaseYear <= 1989 && element.releaseYear >= 1980);
}

console.log(someBookWasReleaseOnThe80s());

// RETORNA TRUE SE ALGUM AUTOR NASCEU NO MESMO ANO

const expectedResult = false;

function authorUnique() {
  ultimoAno = 0;
  let message = false;
  // escreva seu código aqui
  books.forEach((element) => {
    if(element.author.birthYear === ultimoAno) {
      message = true;
    } else {
      ultimoAno = element.author.birthYear;
      ultimoAutor = element.author;
    }
  });
  return message;
}

console.log(authorUnique())

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]