function qualRepeteMais(array){
var arrayVerificado = [];
let repetiuMais = 0;

  for(var i = 0; i < array.length; i++){
    var contador = 0;  
    var repetiu = false;
    for(var z = 0; z < arrayVerificado.length; z++){
      if(arrayVerificado[z] == array[i]){
      //Verifico se no array auxiliar, o número já foi verificado, caso sim, seto a variavel repetiu para true.
        repetiu = true
      }
    }  
    if(repetiu === false){ //caso não tenha repetido, eu deixo o padrão false.
    arrayVerificado.push(array[i])//add no meu array auxiliar que este número vai ser verificado
      for(var j = 0; j < array.length; j++){
        if(array[i] == array[j]){ //se ele achar, faço meu contador acrescentar +1
          contador++
        }
        
      }
      if(repetiuMais < contador){
        repetiuMais = contador
        numeroQueRepete = array[i]
      }
        }
      }
      return numeroQueRepete;
}

console.log("O número que mais repete nesse array é " + qualRepeteMais([2, 3, 2, 5, 8, 2, 3]) )