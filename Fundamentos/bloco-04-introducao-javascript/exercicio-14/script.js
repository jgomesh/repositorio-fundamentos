var n = 5


for( var i = 1; i <= n; i += 1 ){
    var linhaAsteriscos = ''
    for(var ix =1; ix <= n;ix += 1){
        linhaAsteriscos += '*'
}
    console.log(linhaAsteriscos)
}

linhaAsteriscos = ''
for( var y = 1; y <= n; y += 1 ) {
        linhaAsteriscos += '*'
            console.log(linhaAsteriscos)
}


linhaAsteriscos = '';

for( var y = 1; y <= n; y += 1 ) {
    linhaAsteriscos = ''

            for(var h = n - y; h >= 1;h -= 1){
                linhaAsteriscos = linhaAsteriscos + ' '
            
            }

            for(var g = y - 1 ; g  >= 0; g -= 1 ){
                linhaAsteriscos = linhaAsteriscos + '*'
            }

            console.log(linhaAsteriscos)
}


linhaAsteriscos = '';
for( var y = 1; y <= n; y += 1 ) {
    linhaAsteriscos = ''

            for(var h = n - y; h >= n - 2;h -= 1){
                linhaAsteriscos = linhaAsteriscos + ' '
            
            }

            if(y >= n - 1){
            }

            else if ( y < n-1 ){
            for(var g = y - 1 ; g  >= 0; g -=  0.5 ){

                linhaAsteriscos = linhaAsteriscos + '*'
            }
        
            console.log(linhaAsteriscos)
        }
          
}
