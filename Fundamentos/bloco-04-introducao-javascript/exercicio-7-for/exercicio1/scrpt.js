var numero = 2;
var multiplicadores = [1,2,3,4,5,6,7,8,9,10]
var tabuadaCompleta = [];

for(var i = 0; i < multiplicadores.length; i+= 1){
    numeroMultiplicado = multiplicadores[i] * numero;
    tabuadaCompleta.push(numeroMultiplicado);
}
console.log(tabuadaCompleta);