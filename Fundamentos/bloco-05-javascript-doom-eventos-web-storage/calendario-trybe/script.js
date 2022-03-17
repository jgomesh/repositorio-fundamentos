function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// PARTE QUE COLOCA OS DIAS DO MES

	function createDaysOfTheMonth() {
	const containerDays = document.querySelector('#days');
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

	for (let index = 0; index < dezDaysList.length;index += 1) {
		const monthDays = dezDaysList[index];
		const monthDayItem = document.createElement('li');
		monthDayItem.innerHTML = monthDays;

		if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
			monthDayItem.className = 'day holiday'
		}
		else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
			monthDayItem.className = 'day friday'
		}else if (dezDaysList[index] === 25) {
			monthDayItem.className = 'day holiday friday'
		}	else {
			monthDayItem.className = 'day'
		}

		containerDays.appendChild(monthDayItem);
	}
}
createDaysOfTheMonth();

// PARTE DO BOTAO FERIADOS
function createBotaoFeriado() {
	const divBotoes = document.querySelector('.buttons-container');

		const divBotoesElemento = document.createElement('button');
		divBotoesElemento.innerHTML = 'Feriados';
		
		divBotoesElemento.id = 'btn-holiday'

		divBotoes.appendChild(divBotoesElemento);
};
createBotaoFeriado();

// DANDO FUNCIONALIDADE AO BOTAO

let diasFeriados =	document.querySelectorAll('.holiday');
const buttonHolliday =	document.querySelector('#btn-holiday');
let botaoClicado = false;
buttonHolliday.addEventListener('click', recebeClick);

function recebeClick(eventoMudarCores){
	if(botaoClicado === false){
		for(let i = 0; i < diasFeriados.length;i += 1){
			diasFeriados[i].style.color = 'black';
		}
		botaoClicado = true
	}else{
		for(let i = 0; i < diasFeriados.length;i += 1){
			diasFeriados[i].style.color = '#777';
			botaoClicado = false;
		}
	}
}


// PARTE DO BOTAO SEXTA
function createBotaoSexta() {
	const divBotoes = document.querySelector('.buttons-container');

	const divBotoesElementoSexta = document.createElement('button');

	divBotoesElementoSexta.innerHTML = 'Sexta-feira';
	divBotoesElementoSexta.id = 'btn-friday'
	divBotoes.appendChild(divBotoesElementoSexta);
};
createBotaoSexta();

// DANDO FUNCIONALIDADE AO BOTAO SEXTA

let diasSexta =	document.querySelectorAll('.friday');
const buttonFriday =	document.querySelector('#btn-friday');
let botaoClicadoSexta = false;
let backupDiasSexta = []

for(let i = 0; i < diasSexta.length; i += 1){
	let backupDia = diasSexta[i].innerText
	backupDiasSexta.push(backupDia)
}

buttonFriday.addEventListener('click', recebeClickSexta);

function recebeClickSexta(eventoMudarTexto){
	if(botaoClicadoSexta === false){
	for(let i = 0; i < diasSexta.length;i += 1){
		diasSexta[i].innerText = 'SEXTOU o/'
		botaoClicadoSexta = true;	
	}	
	} else{
		for(let i = 0; i < backupDiasSexta.length;i += 1){
		diasSexta[i].innerText = backupDiasSexta[i];
		botaoClicadoSexta = false;	
		}
	}
}



// PARTE QUE DA ZOOM QUANDO O MOUSE PASSO POR CIMA
window.onload = jsCript;

function jsCript(){

	const containerDays = document.querySelectorAll('#days li');
	for(let i = 0; i < containerDays.length;i += 1){
		containerDays[i].addEventListener('mouseover', mousePassou)
		function mousePassou(){
			containerDays[i].style.fontSize ='30px'
		}
	}
	for(let i = 0; i < containerDays.length;i += 1){
	containerDays[i].addEventListener('mouseout', mouseSaiu)
	function mouseSaiu(){
		containerDays[i].style.fontSize ='20px'
	}
	}
}

// Criando tarefa

function createTarefa() {
		const divTasks = document.querySelector('.my-tasks')
		const criandoTarefa = document.createElement('span');
		criandoTarefa.innerHTML = 'Projeto :';

		divTasks.appendChild(criandoTarefa);
};
createTarefa();

let color = 'green'
const divTasks = document.querySelector('.my-tasks')

function createBackgroundTarefa() {
	const criandoTarefa = document.createElement('div');
	criandoTarefa.className = 'task'
	divTasks.appendChild(criandoTarefa);

	const divCor = document.querySelector('.task');
	divCor.style.backgroundColor = color;
};

createBackgroundTarefa();

// PARTE DE CLICAR NA COR
const divCor = document.querySelector('.task');
divCor.addEventListener('click', recebeClickCor);
let botaoClicadoCor = false;
function recebeClickCor(eventoMudarCores){
	if(botaoClicadoCor === false){
		divCor.className = 'task selected'
		botaoClicadoCor = true;
	}else{
		divCor.className = 'task'
		botaoClicadoCor = false;
	}
}

// PARTE QUE MUDA A COR DOS DIAS




const divSelecionada = document.querySelector('.selected');
const containerDayss = document.querySelectorAll('.day');
let cor = false

for(let i = 0;i < containerDayss.length;i += 1){
containerDayss[i].addEventListener('click', recebeClickCorA);
function recebeClickCorA(eventoMudarCores){
	if( botaoClicadoCor === true && cor === false){
		containerDayss[i].style.color = 'green'
		
		cor = true;
	}else if(botaoClicadoCor === true && cor === true){
		containerDayss[i].style.color = '#777'
		cor = false;
	}
}
}

// CRIAÇÃO DA FUNÇÃO ADICIONAR
let taskInput = document.querySelector('#task-input');
let taskButton = document.querySelector('#btn-add');
let taskList = document.querySelector('.task-list');

taskButton.addEventListener('click', foiClicado);
function foiClicado(){
	if(taskInput.value.includes('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')){
		const criandoLi = document.createElement('li');
		criandoLi.innerHTML = taskInput.value;
		taskList.appendChild(criandoLi);
	} else{
		alert('Sua caixa está vazia!!!')
		}
	}
		
function clicaEnter(event) {
	var x = event.key;
	
	// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
	if (x === "Enter") { 
		if(taskInput.value.includes('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')){
		const criandoLi = document.createElement('li');
		criandoLi.innerHTML = taskInput.value;
		taskList.appendChild(criandoLi);
		} else {
		alert('Sua caixa está vazia!!!')
		}
	}
	}