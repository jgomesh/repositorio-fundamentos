var n = 5


for(var i = 1; i <= n; i += 1){
    var linhaAsteriscos = ''
    for(var ix =0; ix <= n;ix += 1){
    if( i <= n){
        linhaAsteriscos += '*'
    }
}
    console.log(linhaAsteriscos)
}
console.log("")

linhaAsteriscos = ''
for( var y = 1; y <= n; y += 1 ) {
    if( y <= n){
        linhaAsteriscos += '*'
            console.log(linhaAsteriscos)
    }
}

console.log("")
linhaAsteriscos = '';
let l = n - 1

for(let iz = 1; iz <= n; iz += 1){
    for(let jota = 4 ;jota >= 1 ;jota -= 1){
        linhaAsteriscos = linhaAsteriscos + " "
    }
    linhaAsteriscos = linhaAsteriscos + "*"
}
console.log(linhaAsteriscos)
