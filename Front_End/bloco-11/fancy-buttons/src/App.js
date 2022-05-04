import React, { Component } from 'react';
import './App.css';
import Estado from './Estado.js';
import Idade from './Idade'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: '',
      files: '',
      formularioComErros: false ,
    };
  }

  handleError() {
    const { estadoFavorito, idade} = this.state;

    const errorCases = [
      (estadoFavorito.length > 15),
      (idade > 100),
    ];

    const formularioPreenchido = errorCases.every((error) => error === false);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    let value = '';
    if( target.type === 'checkbox') {
      value = target.checked
    } else if ( target.type === 'file') {
      value = target.value
    } else {
      value = target.value
    }
  
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }


  render() {
    const {estadoFavorito, idade, formularioComErros } = this.state
    return (
      <div className='align'>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <Estado value ={estadoFavorito}handleChange={this.handleChange}/>
            <Idade value ={idade} handleChange={this.handleChange}/>
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer} 
              onChange={this.handleChange}
            />
            <input type="file"
            name="files" 
            value={this.state.files} 
            onChange={this.handleChange}/>
          </fieldset>
        </form>
        { formularioComErros
            ? <span style={ { color: 'red' } }>Tem algum erro no seu formulário</span>
            : <span style={ { color: 'green' } }>Tudo correto!</span> }
      </div>
    );
  }
}

export default Form;