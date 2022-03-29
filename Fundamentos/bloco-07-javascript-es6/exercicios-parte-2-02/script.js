const clickButton = document.querySelector('#exercise-button');
const clickCounter = document.querySelector('#click-counter-text');
let clicksNumber = 0;

const countClick = () => {
    clicksNumber += 1 
    clickCounter.innerText = `${clicksNumber}`;
}

clickButton.addEventListener('click', countClick);

