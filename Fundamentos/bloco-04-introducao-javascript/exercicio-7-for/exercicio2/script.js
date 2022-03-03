// Variaveis criadas

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    let numeroMaior= 0;
    let numerosImpares = 0;

// Calculadora Média Aritimética do Array

    for(var i = 0; i < numbers.length ; i += 1 ){
        soma = soma + numbers[i]
    }
    let mediaAritimetica = soma / numbers.length;

    if (mediaAritimetica > 20){
        console.log("Valor da média arimética é maior que 20");
    }
    else{
        console.log("Valor da média aritimética é menor que 20");
    }
    console.log("A Média Aritimética do array é de, " + mediaAritimetica + " !!!!")
// Qual o maior número do Array

    for(var i = 0; i < numbers.length; i+= 1){
        if( numbers[i] > numeroMaior) {
            numeroMaior = numbers[i];
        }
    }

// Quais números do Array são impares

    for(var i = 0; i < numbers.length; i+= 1){
        if( numbers[i] % 2 !== 0) {
            numerosImpares = numerosImpares + 1;
        }
    }
    if(numerosImpares > 0){
        console.log("Temos " + numerosImpares + " numeros Impares!")
    }
    else{
        console.log("Nenhum numero impar encontrado")
    }

// Qual o menor numero do array.

    for(var i = 0; i < numbers.length; i+= 1){
        if( numbers[i] <= numbers[0]) {
            numeroMenor = numbers[i];
        }
    }

// Comunicação com o usuário

    console.log("O menor numero é " + numeroMenor +" !")
    console.log("O maior numero é " + numeroMaior +" !")
    console.log("A soma dos numeros do array é de, " + soma + " !!!");   

// Novas Variáveis

    var arrayAula = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var numeroDividido = [];

// Divindo elementos individuais do Array

    for(var i = 0; i < arrayAula.length; i += 1){
        var divisao = arrayAula[i] / 2;
        numeroDividido.push(divisao);
    }

    console.log("Os numeros do Array 'arrayAula' são " + arrayAula + " !")
    console.log("Os numeros dividios do Array 'arrayAula' são " + numeroDividido + " !")