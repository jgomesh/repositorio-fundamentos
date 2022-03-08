function qualASoma(str){
    // OBJETO PARA TRADUZIR A LETRA
    const converte = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    // Começando a soma
    let soma = 0;
  
    // Numero anterior, o numero anterior do primeiro é 0, por isso n altera o valor soma
    let numLeft = 0;
  
    // TRADUCAO E SOMA DOS INDEX DA STRING
    for (let i = 0; i < str.length; i++) {

      // PEGANDO O VALOR TRADUZIDO E TRANSFORMANDO NO VALOR ATUAL
      const numAtual = converte[str[i]];
  
      // SOME A TRADUÇÃO AO VALOR ATUAL
      soma += numAtual;
  
      // SE O NUMERO ANTERIOR FOR MENOR QUE O VALOR ATUAL
      if (numLeft < numAtual) {
        // DESCONTAMOS O VALOR QUE SOMAMOS ERRADAMENTE E SUBTRAIMOS O VALOR ANTERIOR
        soma -= numLeft + numLeft;
      }
  
      // TRANSFORMAMOS O NUMERO ANTERIOR NO NUMERO ATUAL, QUE SERA O NUMERO ANTERIOR DO PROXIMO
      numLeft = numAtual;
    }
    //   RETORNA SOMA TOTAL
    return soma;
}
  console.log(qualASoma('DCCLXXXIX'));