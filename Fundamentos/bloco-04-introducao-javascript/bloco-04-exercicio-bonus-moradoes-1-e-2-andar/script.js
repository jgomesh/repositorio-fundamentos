let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  for(let key in moradores){
          if( key === 'blocoUm'){
            bloco = 'Bloco 1';
            for(let i = 0; i < moradores[key].length;i += 1){
               console.log(moradores[key][i]['nome'] + ' ' + moradores[key][i]['sobrenome'] + " do " + bloco)
            }
            console.log('')
          }
          
          else if(key ==='blocoDois'){
            bloco = 'Bloco 2';
            for(let i = 0; i < moradores[key].length;i += 1){
               console.log(moradores[key][i]['nome'] + ' ' + moradores[key][i]['sobrenome'] + " do " + bloco)
            }
          }
          else{
              console.log('Esse bloco não existe')
          }
    
}


