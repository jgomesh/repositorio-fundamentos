function finalEIgual(string,stringParte){
	let arrayVazio = []
	let finalString = ""
	var começo = string.length;
	for( let i = 0;i < stringParte.length;i += 1){
	var começo = começo - 1;
	arrayVazio.unshift(string[começo])

	}
	for(let z = 0;z < arrayVazio.length;z += 1){
			finalString = finalString + arrayVazio[z];
	}
	if(finalString === stringParte){
			return true
	}
	else{
		return false
	}
	}
console.log(finalEIgual('testegrande','nde'))