const tasks = document.querySelectorAll(".emergency-tasks div h3");
const divs = document.querySelectorAll(".emergency-tasks div");
const noTasks = document.querySelectorAll(".no-emergency-tasks div h3");
const header = document.querySelector("#header-container");
const noDivs = document.querySelectorAll(".no-emergency-tasks div");
const footer = document.querySelector("#footer-container");

for(let i = 0;i < tasks.length;i += 1){
    tasks[i].style.backgroundColor = 'rgb(204, 0, 255)';
}
for(let i = 0;i < divs.length;i += 1){
    divs[i].style.backgroundColor = 'pink';
    divs[i].style.paddingTop = '10px';
    divs[i].style.heigth = '600px';}
header.style.backgroundColor = '#2fc18c';
for(let i = 0;i < noTasks.length;i += 1){
    noTasks[i].style.backgroundColor = 'black';
    noTasks[i].style.paddingTop = '10px'
}
for(let i = 0;i < noDivs.length;i += 1){
    noDivs[i].style.backgroundColor = 'yellow';
    noDivs[i].style.paddingTop = '10px';
}
footer.style.backgroundColor = '#036b52';

