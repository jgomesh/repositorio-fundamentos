let word = 'arthur';
let  wordReverse = "";

for(var i = word.length - 1; i  >= 0; i -= 1 ){

    wordReverse = wordReverse + word[i];
}

console.log(wordReverse)