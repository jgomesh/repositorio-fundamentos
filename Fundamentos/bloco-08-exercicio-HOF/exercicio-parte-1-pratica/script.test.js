const {
  createEmail,
  newEmployees,
  checaIgualdade,
  areYouRich,
  notaAluno,
  notaCount,
} = require("./script.js");

// REQUISITO 1
describe('1º Requisito: Função cria email para novo contratatado', () => {
  it('Testa se a função createEmail é definida', () => {
    expect(createEmail).toBeDefined();
  });
  it('Testa se a função createEmail cria um email pro usuário', () => {
    expect([createEmail('João')]).toContainEqual({ nome: 'João', email: 'joao@trybe.com' });
  });
  it('Testa se a função newEmployees é definida', () => {
    expect(newEmployees).toBeDefined();
  });
  it('Testa se a função newEmployees devolve o correto', () => {
    expect(newEmployees(createEmail('Carla Paiva'), 'id3')).toEqual({ id1: '',
    id2: '',
    id3: { nome: 'Carla Paiva', email: 'carla_paiva@trybe.com' } });
  });
});

// REQUISITO 2

describe('2º Requisito: Função crie uma loteria de 5 numeros', () => {
  it('Testa se a função checaIgualdade é definida', () => {
    expect(checaIgualdade).toBeDefined();
  });
  it('Testa se a função areYouRich é definida', () => {
    expect(areYouRich).toBeDefined();
  });
  it('Teste se o output da areYouRich está correta', () => {
    const checaTrue = (number) => (number === 5) ? true: false;
    expect([areYouRich(1, checaTrue)]).toContain('Tente novamente.');
    expect([areYouRich(5, checaTrue)]).toContain('Parabéns você ganhou!');
});
});

// REQUISITO 3

describe('3º Requisito: Função ve nota do aluno', () => {
  it('Testa se a função notaAluno é definida', () => {
    expect(notaAluno).toBeDefined();
  });
  it('Testa se a função notaCount é definida', () => {
    expect(notaCount).toBeDefined();
  });
  it('Testa se o notaCount compara e conta elementos do array e retorna dessa nota é 3', () => {
    expect(notaCount(['A', 'B', 'B', 'D'],['A', 'C', 'B', 'D'], notaCount)).toBe(3);
  });
  it('Testa se o notaAluno retorna a nota 7', () => {
    expect(notaAluno(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'],['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], notaCount)).toBe(7);
  });
  
});
