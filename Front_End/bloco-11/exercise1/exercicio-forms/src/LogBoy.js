import React from 'react';

class LogBoy extends React.Component {
  render() {
    const { resumo, cargoo, describe, nomeValue, cidadeValue, emailValue, cpfValue, endereçoValue, estado, house} = this.props;
    return (
      <div className='div-info'>
        <h3>User info</h3>
        Nome: {nomeValue}<br/>
        Email: {emailValue}<br/>
        Cpf: {cpfValue}<br/>
        Endereço: {endereçoValue}<br/>
        Cidade: {cidadeValue}<br/>
        Estado: {estado}<br/>
        Moradia: {house}<br/>
        <h3>Currículo</h3>
        Descrição: {describe}<br/>
        Cargo: {cargoo}<br/>
        Resumo: {resumo}<br/>
      </div>
    )
  }
}

export default LogBoy