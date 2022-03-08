function somaArray(num){
let contador = 0;
for(let i = 0; i <= num;i += 1){
    contador = contador + i

}
return contador
}

console.log(somaArray(5))