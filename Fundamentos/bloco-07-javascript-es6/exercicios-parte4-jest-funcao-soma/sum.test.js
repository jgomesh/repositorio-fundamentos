const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
} = require("./sum.js");

// REQUISITO 1
describe("1º Requisito: A função deve pegar dois números e somar.", () => {
  
  it('Elemento 4 + 5 deve ser 9 ', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Elemento 0 + 0 deve ser 0 ', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Teste se quando 4 + '5' um erro é lançado", () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it("Teste se quando 4 + '5' um erro é lançado", () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});

// REQUISITO 2
describe("2º Requisito: A função deve tirar o item específicado do array", () => {
  
  it('Remover o numero 3 deve retornar o array [1,2,4]', () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
  });
  it('Remover o numero 3 não deve retornar o array [1,2,3,4]', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  });
  it('Se o número não estiver no array, o array volta igual', () => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
  });
});

// REQUISITO 3

describe("3º Requisito: A função deve retorar as palavras esperadas", () => {
  
  it('Divísivel por 3 e 5 deve retornar fizzbuzz', () => {
    expect([myFizzBuzz(15)]).toContain('fizzbuzz');
  });

  it('Divísivel por 3 fizz', () => {
    expect([myFizzBuzz(3)]).toContain('fizz');
  });

  it('Divísivel por 5 fizz', () => {
    expect([myFizzBuzz(5)]).toContain('buzz');
  });

  it('Não é divisível', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Retorna falso se for um número', () => {
    expect(myFizzBuzz('Oi')).toBeFalsy();
  });
});

// REQUISITO 4

describe("4º Requisito: A função deve converter a e u o u em 1 2 3 4 5 e o contrário com a função decode", () => {
  
  it('função encode a,e,i,o,u deve retornar 1,2,3,4,5', () => {
    expect([encode('a,e,i,o,u')]).toContain('1,2,3,4,5');
  });

  it('função encode 1,2,3,4,5 deve retornar a,e,i,o,u', () => {
    expect([decode('1,2,3,4,5')]).toContain('a,e,i,o,u');
  });

  it('Se não for vogal não deve alterar', () => {
    expect([encode('Só altera vogal')]).toContain('Só 1lt2r1 v4g1l');
  });

  it('Se não for vogal não deve alterar', () => {
    expect(encode('Só altera vogal')).toHaveLength(15);
  });
});

// REQUISITO 5

describe('5º Requisito: Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// REQUISITO 6

describe('6º Requisito: Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

// REQUISITO 7 - BONUS

describe('7º Requisito: Função que pega informação do usuário', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se a função searchEmployee retorna o esperado', () => {
    expect([searchEmployee('8579-6', 'firstName')]).toContain('Ana');
  });
  it('Testa se a função searchEmployee retorna o esperado', () => {
    expect([searchEmployee('5569-4', 'lastName')]).toContain('Jobs');
  });
  it('Testa se a função searchEmployee retorna o esperado', () => {
    expect([searchEmployee('5569-4', 'specialities')]).toContainEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });
  it('Testa se a função searchEmployee retorna o esperado', () => {
    expect([searchEmployee('9852-2-2', 'firstName')]).toContain('Jeff');
  });
});