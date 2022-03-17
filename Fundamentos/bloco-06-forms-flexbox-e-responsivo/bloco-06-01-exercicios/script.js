const botaoEnviar = document.querySelector('#entrar-button');
const botaoApagar = document.querySelector('#delete-button');
const textareaInput = document.querySelector('#textarea-tag');
const userInput = document.querySelector('#user-text');
const passwordInput = document.querySelector('#password-text');
const checkboxInformacoes = document.querySelector('#checkbox-informacoes');
const checkboxImagens = document.querySelector('#checkbox-imagens');
const dateValue = document.querySelector('#date-value');
const cidade1 = document.querySelector('#cidade-1');
const praia1 = document.querySelector('#praia-1');
const campo1 = document.querySelector('#campo-1');
const montanhas1 = document.querySelector('#montanhas-1');
const body = document.getElementsByTagName('body');


botaoEnviar.addEventListener('click', nadaAcontece);

function nadaAcontece(evento) {
    if(textareaInput.value.length <= 500 && passwordInput.value.length > 10 && passwordInput.value.length < 50 && userInput.value.length > 10 && userInput.value.length < 40 && checkboxImagens.checked === true) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else if(textareaInput.value.length <= 500 && passwordInput.value.length > 10 && passwordInput.value.length < 50 && userInput.value.length > 10 && userInput.value.length < 40 && checkboxImagens.checked === false) {
        alert('Para participar e enviar o formulário, é necessário que concorde com o uso das imagens das férias')
    } else {
        evento.preventDefault();
        alert('Dados Inválidos.');
    }
}

botaoApagar.addEventListener('click',apagarTudo);

function apagarTudo(evento){
    evento.preventDefault();
    textareaInput.value = '';
    userInput.value = '';
    passwordInput.value = '';
    dateValue.value ='';
    checkboxInformacoes.checked = false;
    checkboxImagens.checked = false;
    cidade1.checked = false;
    praia1.checked = false;
    campo1.checked = false;
    montanhas1.checked = false;
}

console.log(body[0])