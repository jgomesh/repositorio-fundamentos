// EXERCÍCIO 1

let num = 50;
let soma = 0

for( let i = num; i <=  100; i += 1){
    soma += i

}
console.log(soma)

// EXERCICIO 2
let numerosDivisiveis = []
for(let index = 1 ; index <= 125; index += 1 ){
    if(index % 3 === 0){
        numerosDivisiveis.push([index])
    }
} 
if(numerosDivisiveis === 50){
    console.log('Mensagem Secreta')
}
console.log(numerosDivisiveis.length)

// EXERCICIO 3

let jogador1 = 'tesoura';
let jogador2 = 'papel';

if (jogador1 === 'pedra'){
    switch(jogador2){
        case 'pedra': console.log('Isso foi um empate')
        break;
        case 'tesoura': console.log('O Jogador 1 ganhou')
        break;
        case 'papel': console.log('O Jogador 2 ganhou')
        break;
    }
}

if (jogador1 === 'tesoura'){
    switch(jogador2){
        case 'pedra': console.log('O Jogador 2 ganhou')
        break;
        case 'tesoura': console.log('Isso foi um empate')
        break;
        case 'papel': console.log('O Jogador 1 ganhou')
        break;
    }
}

if (jogador1 === 'papel'){
    switch(jogador2){
        case 'pedra': console.log('O Jogador 1 ganhou')
        break;
        case 'tesoura': console.log('O Jogador 2 ganhou')
        break;
        case 'papel': console.log('Isso foi um empate')
        break;
    }
}
// EXERCICIO 4

let idade = 18

if(idade >= 18){
    console.log('Maior de idade')
}
else{
    console.log('Menor de idade')
}

// EXERCICIO 5

let pessoas = {
    Marcela : 7,
    Carlos : 18,
    Camila : 2,
}
let maiorIdade = 0;
let pessoaMaior = ''
for(let key in pessoas){
    if(pessoas[key] > maiorIdade){
        maiorIdade = pessoas[key]
        pessoaMaior = key;
    }
}
let menorIdade = maiorIdade
for(let key in pessoas){
    if(pessoas[key] < menorIdade){
        menorIdade= pessoas[key]
        pessoaMenor = key;
    }
}
console.log(pessoaMenor)