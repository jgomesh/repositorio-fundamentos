const estouAqui = document.querySelector('#elementoOndeVoceEsta');

const pai = document.querySelector('#pai');
const paiDoPai = document.querySelector('#paiDoPai');


estouAqui.parentElement.style.color = 'red';

estouAqui.firstElementChild.innerText = 'Primeiro texto, funcionou mulekee';

let criando = document.createElement('section')
criando.innerText = 'TESTE'

let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let elementosLista = document.querySelectorAll('.voTeRemover');

for(let index = 0; index < elementosLista.length; index += 1){
    let testeUm = elementosLista[index];
    if(testeUm.innerHTML === ""){
    pai.removeChild(testeUm)
    }
}

let elementosListaLista = document.querySelectorAll('.removendoInterno');


    estouAqui.removeChild(elementosListaLista[1])


console.log(paiDoPai.innerHTML)


