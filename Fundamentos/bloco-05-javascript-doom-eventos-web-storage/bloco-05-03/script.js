const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const verificando = document.getElementById('verificando');


// PARTE RESPONSAVEL POR LEVANTAR A CAIXA
firstLi.addEventListener('click', recebeClick);
if(secondLi.className === 'tech' ){}
function recebeClick(eventoDeOrigem){
    firstLi.className = 'tech';
    secondLi.className = '';
    thirdLi.className = '';
}

secondLi.addEventListener('click', recebeClickDois);
function recebeClickDois(eventoDeOrigemDois){
    secondLi.className = 'tech'
    thirdLi.className = ''
    firstLi.className = ''
}

thirdLi.addEventListener('click', recebeClickTres);
function recebeClickTres(eventoDeOrigemTres){
    thirdLi.className = 'tech'
    secondLi.className = ''
    firstLi.className = ''
}

// PARTE RESPONSAVEL POR MUDAR O CONTEUDO DAS CAIXAS
window.onload = jsCarregado;

    function jsCarregado(){
        input.addEventListener('dblclick', recebeuInput)
        function recebeuInput(eventoDeInput){
        let techClass = document.querySelector('.tech');
        let value = input.value;
        techClass.innerText = value;
        }

        
    }

// PARTE QUE MUDA A COR DO TITULO

    myWebpage.addEventListener('mouseover', passaPorCima)
    function passaPorCima(){
        myWebpage.style.color = 'red'
    }
// PARTE QUE MANDA PRO LINK EXTERNO
    myWebpage.addEventListener('dblclick', clicaDenovo)
    function clicaDenovo(){
        window.open("http://www.google.com.br");
        
    }

