const recebeNome = nome => `Tryber ${nome} aqui!`;

console.log(recebeNome('João'));

const recebeSkills = initialString => `${initialString} Minhas cinco principais habilidades são: ${skills.sort().join(' ')}`;

let skills = ['HTML', 'Javascript', 'CSS'];

console.log(recebeSkills(recebeNome('João')));