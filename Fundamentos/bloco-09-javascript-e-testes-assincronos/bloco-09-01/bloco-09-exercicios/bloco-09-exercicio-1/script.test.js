// // REQUISITO 7

const uppercase = async(str, callback) => {
  setTimeout(() => {
   callback(str);
  }, 500);
};

describe("A função uppercase funciona como deveria?", () => {
  it('A função uppercase retorna uma string em uppercase', (done) => {
    uppercase("aBobORa", (result) => {
      try {
        expect(result).toBe("ABOBORa");
        done();
      } catch (error) {
        done(error);
      }
    });
  })

});

// REQUISITO 8
// loginValidation.test.js
const { expect } = require("@jest/globals");
const {
  getPokemonDetails,
} = require("./script.js");

describe("A função getPokemon funciona como deveria?", () => {
    it('A função getPokemonDetails retorna os dados do pokemon', (done) => {
      getPokemonDetails("Charmander", (result) => {
        try {
          expect(result).toBe("Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember");
          done();
        } catch (error) {
          done(error);
        }
      });
    })
  
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      getPokemonDetails("Adadada", (result) => {
        try {
          expect(result).toEqual(new Error("Não temos esse pokémon para você :("));
          done();
        } catch (error) {
          done(error)
        }
      });
    });
  });
// // REQUISITO 10
beforeEach(() => console.log('1 - beforeEach')); //1 - 4
afterEach(() => console.log('1 - afterEach')); //3 - 8

test('', () => console.log('1 - test')); //2

describe('Scoped / Nested block', () => {  
  beforeEach(() => console.log('2 - beforeEach'));// 5
  // afterEach(() => console.log('2 - afterEach')); 7

  test('', () => console.log('2 - test')); // 6
});