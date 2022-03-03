let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let iSecond = 0;

for (let i = 0 ; i < numbers.length ; i += 1){
    
    iSecond += 1;

    if(iSecond < numbers.length){
        let multiplyNumber = numbers[i] * numbers[iSecond];
        newNumbers.push(multiplyNumber);
    }

    else{
        multiplyNumber = numbers[i] * 2
        newNumbers.push(multiplyNumber);
    }

}

console.log(numbers);
console.log(newNumbers);