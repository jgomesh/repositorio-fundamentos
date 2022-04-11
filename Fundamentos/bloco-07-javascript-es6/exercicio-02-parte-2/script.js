function verifyIsNumber(num1, num2){
  if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
      throw new Error('Um dos valores está vazio. SEU MERDA!')
  }
}

const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyIsNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
    throw error.message;
  }
    finally {
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
   }
  }
    
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

