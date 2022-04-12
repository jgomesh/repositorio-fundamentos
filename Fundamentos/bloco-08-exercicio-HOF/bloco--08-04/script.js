// REQUISITO 1 - FUNÇÃO QUE SOMA ITENS DO ARRAY

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acumulador, item) => acumulador + item);

// REQUISITO 2 - CRIA UMA STRING COM O NOME DOS AUTORES

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

const reduceNames = (objeto) => `${objeto.map((element) => element.author.name).reduce((acumulator, element) => `${acumulator}, ${element}`)}.`;

// REQUISITO 3 - CRIA UMA FUNÇÂO COM A MÉDIA DAS IDADES

const averageAge = (objeto) => objeto.map((element) => (element.releaseYear - element.author.birthYear)).reduce((acumulador, item) => acumulador + item) / objeto.length;

// REQUISITO 4 - ENCONTRE O LIVRO COM MAIOR NOME

const longestNamedBook = (objeto) => objeto.filter((element) => element.name === objeto.map((element) => element.name).reduce((acumulador, element) => (acumulador.length > element.length) ? acumulador : element));

// REQUISITO 5 - QUANTAS VEZES APARECEM AS LETRAS A e a

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (nameArray) => nameArray.reduce((acumulador, elemento) => acumulador + elemento).replace(/([b-z])/gi, '').length;

// REQUISITO 6 - CRIA OBJETO COM PERFIL

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(estudantesArray, notasArray) {
  const objetoEstudante =  estudantesArray.map((elemento) => ({name: elemento}));
  notasArray.forEach((element,index) => objetoEstudante[index].nota = element.reduce((acumulador, item) => acumulador + item) / element.length);
  return objetoEstudante
}
