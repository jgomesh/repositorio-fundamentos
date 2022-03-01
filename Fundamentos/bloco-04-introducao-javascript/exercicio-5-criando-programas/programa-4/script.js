const angulo1 = 90
const angulo2 = -10
const angulo3 = 100
let somaAngulos = (angulo1 + angulo2 + angulo3)

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Um triangulo não tem angulos com valor negativo ")
}
else if( somaAngulos === 180){
    console.log("true")
}
else if(somaAngulos !== 180){
    console.log("false")
}