// IDENTIFICANDO ELEMENTOS DENTRO DO HTML

const parteLetras = document.querySelector('#main-container');
const backgroundButton = document.querySelector('#backgroundButton');
const backgroundInput = document.querySelector('.backgroundInput');
const titulo = document.querySelector('.main-titulo');
const body = document.querySelector('body');
const referencia = document.querySelector('.main-reference');
const paragrafo = document.querySelector('.main-paragraph');
const sectionButtons = document.querySelector('.change-page');

const textColorButton = document.querySelector('#textColorButton');
const colorInput = document.querySelector('.colorInput');

const fontSizeButton = document.querySelector('#fontSizeButton');
const fontSizeInput = document.querySelector('.fontSizeInput');

const fontFamilyButton = document.querySelector('#fontFamilyButton');
const fontFamilyInput = document.querySelector('.fontFamilyInput');

const textSpaceButtton = document.querySelector('#textSpaceButtton');
const textSpaceInput = document.querySelector('.textSpaceInput');
// CRIANDO FUNÇÃO QUE MUDA O BACKGROUND
backgroundButton.addEventListener('click', mudaCorBackground);

function mudaCorBackground(){
    body.style.backgroundColor = backgroundInput.value;
    localStorage.setItem('backgroundColor',backgroundInput.value)
}

// CRIANDO FUNÇÃO QUE MUDA A COR DO TEXTO
textColorButton.addEventListener('click', mudaCorTexto);

function mudaCorTexto(){
    body.style.color = colorInput.value;
    localStorage.setItem('textColor',colorInput.value)
}

// CRIANDO FUNÇÃO QUE MUDA O TAMANHO DA FONTE
fontSizeButton.addEventListener('click', mudaFontSize);

function mudaFontSize(){
    body.style.fontSize = fontSizeInput.value;
    localStorage.setItem('fontSize',fontSizeInput.value)
}

// CRIANDO FUNÇÃO QUE MUDA A FAMILIA DA FONTE
fontFamilyButton.addEventListener('click', mudaFamilia);

function mudaFamilia(){
    body.style.fontFamily = fontFamilyInput.value;
    localStorage.setItem('fontFamily',fontFamilyInput.value);
}

// CRIANDO FUNÇÃO QUE MUDA ESPAÇAMENTO
textSpaceButtton.addEventListener('click', mudaLetterSpacing);

function mudaLetterSpacing(){
    body.style.letterSpacing = textSpaceInput.value;
    localStorage.setItem('textSpace',textSpaceInput.value);
}

// SALVANDO INFORMAÇÃO
let usuarioBackground = localStorage.getItem('backgroundColor');
body.style.backgroundColor = usuarioBackground;

let usuarioTextColor = localStorage.getItem('textColor');
body.style.color = usuarioTextColor;

let usuarioFontSize = localStorage.getItem('fontSize');
body.style.fontSize = usuarioFontSize;

let usuarioTextSpace = localStorage.getItem('textSpace');
body.style.letterSpacing = usuarioTextSpace;

let usuarioFontFamily = localStorage.getItem('fontFamily');
body.style.fontFamily = usuarioFontFamily;