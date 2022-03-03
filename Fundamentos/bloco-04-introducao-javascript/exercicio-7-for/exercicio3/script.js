let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1 ; i < numbers.length ; i += 1 ){
    for(let iSecond = 0; iSecond < i; iSecond +=1){
        if (numbers[i] > numbers[iSecond]){
            let position = numbers[i];
            numbers[i] = numbers [iSecond];
            numbers[iSecond] = position;
        }
    }
}
console.log(numbers)