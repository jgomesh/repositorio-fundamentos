// REQUISITO 1 - USANDO SPREED PARA CALCULAR AREA

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((element) => console.log(rectangleArea(...element)));

// REQUISITO 2 -  SOMA DE INFINITOS PARAMETROS

const soma = (...numeros) => numeros.reduce((acumulador, item) => acumulador + item);

// REQUISITO 3 - DANDO COMO PARAMETRO PROPRIEDDADES DO OBJETO

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({likes, age, name}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;


// REQUISITO 4 ACHA PESSOAS AUSTRALIANAS DO SC 20

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (objeto) => `${objeto.filter(({bornIn,nationality}) => bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian').map(({name}) => name).reduce((acumulador, item) => `${acumulador} ${item},`,'As pessoas do século 20 são:')}.`;

// REQUISITO 5 TROCA POSICOES

const myList = [1, 2, 3];

const changeFirstAndLast = ([item1, item2, item3]) => [item3,item2,item1];

// REQUISITO 6 TRANSFORMA ARRAY EM OBJETO REFINADO

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObjeto = ([carro,marca,ano]) => ({carro, marca, ano});

const carrosCadastrados = []
carrosCadastrados.push(toObjeto(palio),toObjeto(shelbyCobra), toObjeto(chiron));

//  REQUISITO 7 

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

const shipLength = ({name,length,measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

// REQUISITO 8

// escreva greet abaixo

const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`;

// REQUISITO 9

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;

const arrayMessesDoAno = [...spring, ...summer, ...winter, ...autumn];
