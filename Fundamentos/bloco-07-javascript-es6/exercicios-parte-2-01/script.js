// COMO FAZER O FATORIAL

const retornaFatorial = numero => {
  let multiplicando = 1;
  for(let i = numero; i > 0;i -= 1){
    multiplicando *= i;
  }
  return multiplicando;
}

console.log(retornaFatorial(0));

// COMO FAZER O FATORIAL DE FORMA RECURSIVA

const fatorial = numero => numero === 0 ? 1 : numero * fatorial(numero - 1);

console.log(fatorial(5));
// COMO RETORNAR A MAIOR PALAVRA DA STRING

const retornaMaiorString = string => {
  const stringArray =  string.split(' ');
  let maiorString = '';
  for(let i = 0; i < stringArray.length; i += 1){
    if(stringArray[i].length > maiorString.length){
      maiorString = stringArray[i];
    }
  }
  return maiorString
}

console.log(retornaMaiorString('Vamos ver se funcionando aqui realmente ta'));
