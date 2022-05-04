import React from 'react';
import UserInputs from './UserInputs';
import LastJob from './LastJob';
import './Forms.css'

class Forms extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.alertAtention = this.alertAtention.bind(this);

    this.state = {
      cargo: "",
      cidade: "",
      cpf: "",
      descrição: "",
      email: "",
      endereço: "",
      estado: "",
      house: "",
      nomeCompleto: "",
      resume: "",
      };
  }

  handleChange({ target }) {
    let { name, value } = target;
    if(name === "nomeCompleto") value = value.toUpperCase()
    this.setState({
      [name]: value,
    });
  }

  alertAtention(){
    alert('Preencha com cuidado esta informação.');
  }
  render() {
    const {nomeCompleto, cidade} = this.state
    return (
      <form className="form">
        <UserInputs cidadeValue={cidade} nomeValue={nomeCompleto} handleChange={this.handleChange}/>
        <LastJob alertAtention={this.alertAtention} handleChange={this.handleChange}/>
      </form>
    );
  }
}

export default Forms;
