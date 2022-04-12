// REQUISITO 7

const teste = (string) => {
  return string
}

const uppercase = (str, callback) => {
  setTimeout(() => {
   return callback(str.toUpperCase());
  }, 500);
};

test('Não deveria passar!', () => {
      expect([uppercase('teste eu', teste)]).toContain('TESTE EU');
      console.log('Deveria falhar!');
});