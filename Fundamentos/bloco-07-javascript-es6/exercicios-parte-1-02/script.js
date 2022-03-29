const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)

let numbers = [13, 3, 4, 10, 7, 2];

for (let i = 1 ; i < numbers.length ; i += 1 ){
    for(let iSecond = 0; iSecond < i; iSecond +=1){
        if (numbers[i] < numbers[iSecond]){
            let position = numbers[i];
            numbers[i] = numbers [iSecond];
            numbers[iSecond] = position;
        }
    }
}
console.log(`Os números ${numbers} se encontram ordenados de forma crescente!`)