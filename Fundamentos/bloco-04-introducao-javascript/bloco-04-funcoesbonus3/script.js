function quantoDeCada(basket){ 
let contadorCarrinho = {

    Melancia: 0,
    Jaca: 0,
    Abacate: 0,
    Uva: 0,
    Laranja: 0,
    Pera: 0,
    Banana: 0,
}

for(let i = 0; i < basket.length; i += 1){
  contadorCarrinho[basket[i]] += 1;
}
let string = "Sua cesta possui: "
for(let key in contadorCarrinho){
    if (contadorCarrinho[key] > 0){
        if (contadorCarrinho[key] > 1){
            string += contadorCarrinho[key] + " " + key + "s, " 
        }
        else{
            string += contadorCarrinho[key] + " " + key + ", "
        }
    }
    else{

    }

}
let string2 = string.substring (0, string.length -2);

string2 = string2 + '.'

return string2
}
console.log(quantoDeCada([
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ]))