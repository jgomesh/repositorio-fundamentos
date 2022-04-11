// REQUISITO 1 - Soma números
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// REQUISITO 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// REQUISITO 3

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

console.log(myFizzBuzz(15));

// REQUISITO 4

function encode(stringWord) {
  // seu código aqui
  let stringTraduzida = "";
  for (let index = 0; index < stringWord.length; index += 1) {

    if(stringWord[index] === 'a') {
      stringTraduzida += '1';
    }
    else if (stringWord[index] === 'e') {
      stringTraduzida += '2';
    }
    else if (stringWord[index] === 'i') {
      stringTraduzida += '3';
    }
    else if (stringWord[index] === 'o') {
      stringTraduzida += '4';
    }
    else if (stringWord[index] === 'u') {
      stringTraduzida += '5';
    } else {
    stringTraduzida += stringWord[index];
  }
  }
  return stringTraduzida;
}

function decode(stringCodificada) {
    let stringTraduzida = "";
  for (let index = 0; index < stringCodificada.length; index += 1) {

    if (stringCodificada[index] === '1') {
      stringTraduzida += 'a';
    }
    else if (stringCodificada[index] === '2') {
      stringTraduzida += 'e';
    }
    else if (stringCodificada[index] === '3') {
      stringTraduzida += 'i';
    }
    else if (stringCodificada[index] === '4') {
      stringTraduzida += 'o';
    }
    else if (stringCodificada[index] === '5') {
      stringTraduzida += 'u';
    } else {
      stringTraduzida += stringCodificada[index];
    }
  }
  return stringTraduzida;
}

// REQUISITO 5 
function techList(arrayFuncoes, nome) {
  // seu código aqui
  let arrayEscuro = [];
  let arrayOrganizado = arrayFuncoes.sort();
  let objetoOrganizado = {
  };
  for (let index = 0;index < arrayOrganizado.length;index += 1) {
    objetoOrganizado = {};
    objetoOrganizado.name = nome;
    objetoOrganizado.tech = arrayOrganizado[index];
    arrayEscuro.push(objetoOrganizado);
  }
  if (arrayEscuro.length > 0) {
    return arrayEscuro;
  } else {
    return 'Vazio!';
  }
}

// REQUISITO 6

function hydrate(stringBar) {
  let numeros = stringBar.match(/\d/g);
  numeros = numeros.join('');
  let arraySeparado = numeros.split('');
  // seu código aqui
  let somanumeros = 0;
  for (let index = 0; index < arraySeparado.length;index += 1) {
      somanumeros += parseInt(arraySeparado[index]);
  }
  if (somanumeros > 1) {
    return somanumeros + ' copos de água';
  } else {
    let stringRetornada = somanumeros + ' copo de água';
    return stringRetornada;
  }
}

// REQUISITO 7 

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if(id === professionalBoard[i]['id']){
      return professionalBoard[i][detail];
    }
  }
};

console.log(searchEmployee('4456-4', 'specialities'))
module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};