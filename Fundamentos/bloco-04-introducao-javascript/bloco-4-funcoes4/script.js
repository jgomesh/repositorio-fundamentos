function qualStringMaior(array){
    let stringMaior = "";
    for(var i = 0;i < array.length; i += 1){
        if( array[i].length > stringMaior.length){
            stringMaior = array[i];
        }
    }
    return stringMaior
    }
    
    console.log(qualStringMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))