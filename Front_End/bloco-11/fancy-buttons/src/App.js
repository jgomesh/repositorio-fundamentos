import React, { Component } from 'react'
import './App.css'
class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: '',
      files: '',
    };
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
    });
  }

  render() {
    return (
      <div className='align'>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </label>
            <input
              type="number"
              name="idade"
              value={this.state.idade} 
              onChange={this.handleChange}
            />
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
      </div>
    );
  }
}

export default Form;