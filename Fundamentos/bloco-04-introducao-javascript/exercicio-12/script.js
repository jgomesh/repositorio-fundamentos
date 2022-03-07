function qualMenorString(array){
let searchMode = 'menor';
let stringMaior = '';
for(var i = 0;i < array.length; i += 1){
	if( array[i].length > stringMaior.length){
	stringMaior = array[i];
	}
}

for(var i = 0;i < array.length; i += 1){
	if( array[i].length < stringMaior.length){
	stringMenor = array[i];
	}
}
return stringMenor
}

console.log(qualMenorString(['java','javascript','python','html','css']))