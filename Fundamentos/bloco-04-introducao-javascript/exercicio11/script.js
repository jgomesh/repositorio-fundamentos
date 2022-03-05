let array = ['java', 'javascript', 'python', 'html', 'css'];
let stringMaior = "";

for(var i = 0;i < array.length; i += 1){
    if( array[i].length > stringMaior.length){
        stringMaior = array[i];
    }
}

console.log(stringMaior)
