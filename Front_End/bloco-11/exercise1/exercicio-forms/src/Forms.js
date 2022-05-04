import React from 'react';
import UserInputs from './UserInputs';
import './Forms.css'

class Forms extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        nomeCompleto: "",
        cidade: "",
        email: "",
        endereço: "",
        estado: "",
        cpf: ""
    };
  }

  handleChange({ target }) {
    let { name, value } = target;
    if(name === "nomeCompleto") value = value.toUpperCase()
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {nomeCompleto, cidade} = this.state
    return (
      <form className="form">
        <UserInputs cidadeValue={cidade} nomeValue={nomeCompleto} handleChange={this.handleChange}/>
      </form>
    );
  }
}

export default Forms;
