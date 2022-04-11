const recebeTrês = (objeto, newKey, keyValue) => {
  objeto[newKey] = keyValue;
  return objeto
}

console.log(recebeTrês({idade: 18, age: 22, pinto: '16cm'},'lastName', 'João'))

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function usaObjeto() {
  const habilidades = Object.keys(student1);
  let fraseCompleta = '';
  for(let i = 0; i < habilidades.length; i += 1) {
    fraseCompleta += `${habilidades[i]}, Nível: ${student1[habilidades[i]]}. `;
  }
  return fraseCompleta
}

console.log(usaObjeto());