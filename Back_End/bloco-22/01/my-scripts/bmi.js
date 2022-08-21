const readline = require('readline-sync');

const IMC_MIN_MAX = {
  "Abaixo do peso": {
    min: 0.0,
    max:18.5,
  },
  "Peso normal": {
    min: 18.5,
    max:24.9,
  },
  "Acima do peso": {
    min: 25.0,
    max:29.9,
  },
  "Obesidade grau I": {
    min: 30.3,
    max:34.9,
  },
  "Obesidade grau II": {
    min: 35.0,
    max:39.9,
  },
  "Obesidade grau II": {
    min: 40.0,
    max:1000,
  },
}

const userWeight = readline.questionFloat("What' your weight kg?" );
const userHeight = readline.questionInt("What' your height cm?" );

const imcCalculator = (weight, height) => weight / ((height / 100) ** 2);

const imcStatus = (imc) => {
  const statusList = Object.keys(IMC_MIN_MAX);
  const result = statusList.filter((status) => {
    if( imc <= IMC_MIN_MAX[status].max && imc >= IMC_MIN_MAX[status].min ) {
      return status;
    }
  })[0];
  return result;
};

const IMC = imcCalculator(userWeight, userHeight);

console.log(IMC);

console.log(imcStatus(IMC));