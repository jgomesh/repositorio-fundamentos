
// REQUISITO 1 - CRIE UM GERADOR DE EMAIL E UMA FUNÇÃO PARA ADICIONAR A LISTA DE CONTRATADOS
function createEmail(nome) {
  const formatoEmail =  nome.replace(/ /g, '_').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  const objeto = {}
  objeto['nome'] = nome;
  objeto['email'] = `${formatoEmail}@trybe.com`;
  return objeto;
}

const employees = {
  id1: '',
  id2: '',
  id3: '', 
}

const newEmployees = (contratado,id) => {
  employees[id] = contratado
  return employees;
};

// REQUISITO 2 - CRIA LOTERIA SIMPLES

const checaIgualdade = (number) => (number === Math.floor(Math.random() * (5) + 1)) ? true : false;

const areYouRich = (number, func) => (func(number)) ? 'Parabéns você ganhou!': 'Tente novamente.';

// REQUISITO 3 - 

// Crie uma HOF que receberá três parâmetros.
// O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas 
// (respostas da pessoa estudante) e o terceiro é uma função
//  que checa se as respostas estão corretas e faz a contagem da 
// pontuação final recebida pela pessoa estudante. Ao final a HOF
//  deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function notaCount(gabarito, respostasAluno) {
  let nota = 0;
  for(let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostasAluno[i]){
      nota += 1;
    }
  }
  return nota
}

const notaAluno = (gabarito,respostasAluno, func) => func(gabarito,respostasAluno);

console.log(notaAluno(RIGHT_ANSWERS, STUDENT_ANSWERS, notaCount))

module.exports = {
  createEmail,
  newEmployees,
  checaIgualdade,
  areYouRich,
  notaAluno,
  notaCount,
}