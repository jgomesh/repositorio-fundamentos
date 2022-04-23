import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const conteudoArray = conteudos.map((conteudoInfo) => {
  return `O conteúdo é: ${conteudoInfo.conteudo}
  Status: ${conteudoInfo.status}
  Bloco: ${conteudoInfo.bloco}`
});

class Content extends React.Component {
  render() {
    return <main>
      <ol id='elemento-pai' key={`elemento-pay`}>
      {conteudoArray.map((conteudoFinal, index) => <li className='cards'>{conteudoFinal}</li>)}
      </ol>
      </main>
  }
}

export default Content;