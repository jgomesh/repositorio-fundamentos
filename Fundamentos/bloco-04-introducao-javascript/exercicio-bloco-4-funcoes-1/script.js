function verificaPalindromo(string){
	let arrayString = [];
	
	for(let letter of string){
		arrayString.push(letter);
	}
	outraInversa = '';
	for(var i = arrayString.length - 1;i >= 0;i -= 1){
	
		outraInversa = outraInversa + arrayString[i];

}
	if(string === outraInversa){
		return true
	}
	else{
		return false
	}
}

console.log(verificaPalindromo('arara'))