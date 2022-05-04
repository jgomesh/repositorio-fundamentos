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

  criaCurriculum({target}){
    const divInfo = document.querySelector('.div-info');
    divInfo.style.display= 'flex';
  }
  render() {
    const {nomeCompleto, cidade, email, cpf, endereço, house, estado, descrição, cargo, resume} = this.state
    return (
      <main>
      <form className="form">
        <UserInputs cidadeValue={cidade} nomeValue={nomeCompleto} handleChange={this.handleChange}/>
        <LastJob alertAtention={this.alertAtention} handleChange={this.handleChange}/>
      </form>
      <button onClick={this.criaCurriculum}>Criar Currículo</button>
      <br/>
      <div className='div-info'>
        <h3>User info</h3>
        Nome: {nomeCompleto}<br/>
        Email: {email}<br/>
        Cpf: {cpf}<br/>
        Endereço: {endereço}<br/>
        Cidade: {cidade}<br/>
        Estado: {estado}<br/>
        Moradia: {house}<br/>
        <h3>Currículo</h3>
        Descrição: {descrição}<br/>
        Cargo: {cargo}<br/>
        Resumo: {resume}<br/>
      </div>
      </main>
    );
  }
}

export default Forms;
