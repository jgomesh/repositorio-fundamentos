const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  
}

function damageAD (character) {
  if (!character.weaponDmg === true) {
    return Math.floor(Math.random() * (character.strength - 15)) + 15;
  } else if(!character.weaponDmg === false){
    return  Math.floor(Math.random() * ((character.strength * character.weaponDmg) - 30)) + 30;
  }
}

function damageAP(mage) {
  if (mage.mana >= 15) {
  dano =  Math.floor(Math.random() * ((mage.intelligence * 2) - 45)) + 45;
  actualMana = mage.mana - 15;
  objeto = {damage: dano, mana: actualMana};

  return objeto
  } else {
    return 'Não possui mana suficiente'
  }
}


const battleMembers = { mage, warrior, dragon };

function turnoGuerreiro (funcDamage, atacker, atackedMob) {
  danoReal = funcDamage(atacker);
  atackedMob.healthPoints -= danoReal;
  atacker.damage = danoReal;
  console.log(`O Guerreiro deu ${danoReal} de dano.`)
  console.log(`A vida do dragão agora é ${atackedMob.healthPoints}`)
}

function turnoMago (funcDamage, atacker, atackedMob) {
  mageObject = funcDamage(mage);
  danoReal = mageObject.damage;
  atacker.mana = mageObject.mana;
  atackedMob.healthPoints -= danoReal;
  console.log(`O Mago deu ${danoReal} de dano e sua mana agora é ${atacker.mana}.`)
  console.log(`A vida do dragão agora é ${atackedMob.healthPoints}`)
}

function turnoDragon (funcDamage,atacker, atackedplayers) {
  danoReal = funcDamage(atacker);
  atacker.damage = danoReal;
  console.log(`O Dragão deu ${danoReal} de dano.`);
  for (let i = 0; i < atackedplayers.length; i += 1) {
    atackedplayers[i].healthPoints -= danoReal;
  }
  console.log(`A vida do Guerreiro é ${atackedplayers[0].healthPoints} e a do Mago é ${atackedplayers[1].healthPoints}`)
}

function teste (membros) {
  console.log(membros)
}
const gameActions = {
  // Crie as HOFs neste objeto.
  turnoWarrior: turnoGuerreiro(damageAD, warrior, dragon),
  turnoMago: turnoMago(damageAP, mage, dragon),
  turnoDragao: turnoDragon(damageAD, dragon, [warrior, mage] ),
};

turnoGuerreiro(damageAD, warrior, dragon);
turnoMago(damageAP, mage, dragon);
turnoDragon(damageAD, dragon, [warrior, mage] );
console.log('')
turnoGuerreiro(damageAD, warrior, dragon);
turnoMago(damageAP, mage, dragon);
turnoDragon(damageAD, dragon, [warrior, mage] );
console.log('')
turnoGuerreiro(damageAD, warrior, dragon);
turnoMago(damageAP, mage, dragon);
turnoDragon(damageAD, dragon, [warrior, mage] );
console.log('')
turnoGuerreiro(damageAD, warrior, dragon);
turnoMago(damageAP, mage, dragon);
turnoDragon(damageAD, dragon, [warrior, mage] );
console.log('')
turnoGuerreiro(damageAD, warrior, dragon);
turnoMago(damageAP, mage, dragon);
turnoDragon(damageAD, dragon, [warrior, mage] );
console.log('')
