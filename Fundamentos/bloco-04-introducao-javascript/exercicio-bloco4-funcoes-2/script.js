function qualMaiorNumer(arrayNum){
    let maiorNumero = 0;
    for(var i = 0; i < arrayNum.length ; i += 1)
    if(maiorNumero < arrayNum[i]){
        maiorNumero = arrayNum[i];
    }
    return arrayNum.indexOf(maiorNumero)
}
console.log(qualMaiorNumer([2, 30, 6, 7, 10, 1]))

function qualMenorNumer(arrayNum){
    let maiorNumero = 0;
    for(let i = 0; i < arrayNum.length ; i += 1)
    if(maiorNumero < arrayNum[i]){
        maiorNumero = arrayNum[i];
    }
    let menorNumero = maiorNumero;
    for(let z = 0; z < arrayNum.length ; z += 1)
    if(menorNumero > arrayNum[z]){
       menorNumero = arrayNum[z];
    }
    return arrayNum.indexOf(menorNumero)
}
console.log(qualMenorNumer([2, 3, 2, 5, 8, 2, -3]))