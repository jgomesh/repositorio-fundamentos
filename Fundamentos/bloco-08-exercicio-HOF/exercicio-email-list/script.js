const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verify3 = (number) => number % 3 === 0;

const verify5 = (number) => number % 5 === 0;

const findDivisibleBy3And5 = (num) => {
  return (verify3(num) && verify5(num))
}

const isEven = numbers.find(findDivisibleBy3And5);
console.log(isEven);

// EXERCICIO 2

const names = ['Joãoo', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (elemento) => {
  return (elemento.length === 5)
}

console.log(names.find(findNameWithFiveLetters));

// EXERCICIO 3

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]





function findMusic(id) {
  const objetoComId = musicas.find((elemento) => {
    return elemento['id'] === id;
  });
  return objetoComId.title;
};


const namesa = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => array.some((nome) => nome === name);

console.log(hasName(namesa, 'Ana'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (people, minimumAge) => {
  //Adicione seu código aqui
  let arrayIdades = []
  people.forEach((elemento,index,array) => {
    arrayIdades.push(array[index]['age'])
  })
  return arrayIdades.every((age) => age >= minimumAge)
}

// Adicione se código aqui

people.sort((a, b) => a['age'] - b['age']);

console.log(people);

people.sort((a, b) => b['age'] - a['age']);

console.log(people);