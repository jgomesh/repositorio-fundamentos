const wakeUp = () => 'Acordando!!';
const cafeUp = () => 'Bora tomar café!!';
const sleepUp = () => 'Partiu dormir!!';
// Ao chamar a função doingThings:
const doingThings = (func) => func();

console.log(doingThings(wakeUp));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!