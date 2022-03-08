function arrayOfNumbers(vector){

let numerosPares = []
	// Estrutura de repetição para ver cada casa
	for(let i = 0; i < vector.length; i += 1){

	// Estrura de repetição para ver os elementos dentro de cada casa
		for(let z = 0;z < vector[i].length; z += 1){

			// Verifica se o numero é par
			if (vector[i][z] % 2 === 0){

				//    Coloca dentro do ARRAY
				numerosPares.push(vector[i][z])

			}
		}
	}
	
	// Retorna resultado
	return numerosPares
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]))