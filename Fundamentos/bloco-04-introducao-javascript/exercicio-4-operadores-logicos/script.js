// Parte do código, testando &&

const currentHour = 24;
let message = "";

if(currentHour >= 22 && currentHour <= 24){
    message = "Não deveriámos comer nada, é hora de dormir";
}
else if(currentHour >=18 && currentHour < 22 ){
    message = "Rango da noite, vamos jantar :D";
}
else if(currentHour >=14 && currentHour < 18 ){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!";
}
else if(currentHour > 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
}
else {
    message = "Esté horário não existe";
}

console.log(message)
// Parte do código testando ||
let weekDay = "domingo,";
let weekMessage = "";
if (weekDay === 'segunda-feira' || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    weekMessage = "Oba, mais um dia de aprendizado na Trybe >:D";
}
else if (weekDay === "sábado" || weekDay === "domingo"){
    weekMessage = "FINALMENTE, descanso merecido UwU";
}
else{
    weekMessage = "Isso não é um dia da semana";
}
console.log(weekMessage)