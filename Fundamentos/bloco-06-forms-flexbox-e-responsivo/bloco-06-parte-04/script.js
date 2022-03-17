const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcontece(event){
    event.preventDefault();
    console.log('Funcionou')
}

HREF_LINK.addEventListener('click',nadaAcontece);

INPUT_CHECKBOX.addEventListener('click',nadaAcontece);

function clicaEnter(event) {
	var x = event.key;
	
	// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
	if (x === "a") { 
	INPUT_TEXT.innerText += 'a'
	}
    else{
        alert('Não clicou a')
        INPUT_TEXT.innerText =''
    }
}