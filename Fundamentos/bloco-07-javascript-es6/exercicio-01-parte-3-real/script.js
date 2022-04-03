const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ADICIONA PROPRIEDADE
const adicionaPropriedadeLesson = (objeto,chave,valor) => {
  objeto[chave] = valor
  return objeto
}

adicionaPropriedadeLesson(lesson2,'turno','noite');

// CRIA ARRAY COM KEYS
const createKeysArray = (atualObject) => Object.keys(atualObject);

// DESCOBRE O TAMANHO DO OBJETO
const objectSize = (objeto) => Object.keys(objeto).length;


// MOSTRA OS VALORES

const objectValues = (objeto) => Object.values(objeto);

const allLessons = {};
const lesson11 = adicionaPropriedadeLesson({},'lesson1',lesson1);
const lesson22 = adicionaPropriedadeLesson({},'lesson2',lesson2);
const lesson33 = adicionaPropriedadeLesson({},'lesson3',lesson3);
Object.assign(allLessons, lesson11, lesson22, lesson33);

// quantos alunos

function contaAlunos(objeto) {
  const propriedadesAllLessons = Object.keys(objeto);
  for (let keys of propriedadesAllLessons) {
    numeroAlunos += parseInt(objeto[keys]['numeroEstudantes'])
  }
  return numeroAlunos
}

// Acessa o objeto por número

const getValueByNumber = (objeto, numero) => Object.values(objeto)[numero];

// Função para verificar se é correto.

const verifyPair = (objeto, propriedade, valor) => objeto[propriedade] === valor;

// SOBRE O PROFESSOR

function createReport(objeto, professor) {
  const relatorioProfessor = {};
  const aulasProfessor = [];
  let alunosProfessor = 0;
  adicionaPropriedadeLesson(relatorioProfessor, 'professor', professor);
  const separetedObjects = Object.keys(objeto);
  for (let keys of separetedObjects) {
    if (verifyPair(objeto[keys], 'professor', professor)) {
      aulasProfessor.push(objeto[keys]['materia']);
      alunosProfessor += objeto[keys]['numeroEstudantes'];
    }
  }
  adicionaPropriedadeLesson(relatorioProfessor, 'aulas', aulasProfessor);
  adicionaPropriedadeLesson(relatorioProfessor, 'estudantes', alunosProfessor);
  return relatorioProfessor
}

console.log(createReport(allLessons, 'Maria Clara'))