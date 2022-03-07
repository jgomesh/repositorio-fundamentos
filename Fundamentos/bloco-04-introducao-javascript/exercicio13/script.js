// Criando variávis iniciais
function quaisPrimos(num){

let numerosPrimos = [];
let numInicial = num;

for( num; num > 1; num -= 1){

// Zerando variável contadora de divisoes
  let vezesDividido = 0;

  // Estrutura de repetição para conferir quantas divisoes
  for(var i = 1; i <= num; i += 1){
    if (num % i === 0){
        vezesDividido += 1;
    }
    }
  // Se tiver somente 2 ou menos divisoes é primo

  if(vezesDividido <= 2) {
  numerosPrimos.push(num);
  }
}

// Consultando quais os numeros primos entre 0 e a variável num
console.log(numerosPrimos);

// Descobrindo qual é o maior numero primo
let maiorPrimo = 0
for(var ix = 0; ix < numerosPrimos.length; ix += 1){
    if(numerosPrimos[ix] > maiorPrimo){
        maiorPrimo = numerosPrimos[ix];
    }
}

// Dando o resultado pro console
return 'O maior primo é ' + maiorPrimo;
}
console.log(quaisPrimos(11))