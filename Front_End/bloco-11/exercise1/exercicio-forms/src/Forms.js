import React from 'react';
import LogBoy from './LogBoy';
import UserInputs from './UserInputs';
import LastJob from './LastJob';
import './Forms.css'

let error = '';
class Forms extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.alertAtention = this.alertAtention.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.criaCurriculum = this.criaCurriculum.bind(this);
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
      submit: true,
      };
  }
 
  
  handleChange({ target }) {
    let { name, value } = target;
    if(name === "nomeCompleto") value = value.toUpperCase()
    if(name === 'email') {
      const isValid = value.match(/^([\w.]+)@([\w]+\.)+([\w]{3})/)
      if(!isValid) {
        error = 'Email inválido!'
      } else {
        error = ''
      }
    }
    this.setState({
      [name]: value,
    }); 
  }

  alertAtention(){
    alert('Preencha com cuidado esta informação.');
  }

  criaCurriculum(event){
    event.preventDefault();
    this.setState({
      submit: true,
      })
  }

  deleteAll() {
    this.setState({
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
      submit: false,
      }
    )
    error = ''

  }

  render() {
    const {nomeCompleto, cidade, email, cpf, endereço, descrição, cargo, resume, estado, house, submit} = this.state;
    return (
      <main>
      <form className="form">
        <UserInputs cpfValue={cpf} cidadeValue={cidade} endereçoValue={endereço} nomeValue={nomeCompleto} emailValue={email} handleChange={this.handleChange}/>
        <div className='text-center'>
          <span className='error'>{error}</span>
        </div>
        <LastJob describe={descrição} resumo={resume} cargoo={cargo} alertAtention={this.alertAtention} handleChange={this.handleChange}/>
        <button onClick={this.criaCurriculum}>Criar Currículo</button>
        <button onClick={this.deleteAll}>Apaga</button>
      </form>
      <br/>
      {submit && <LogBoy describe={descrição} estado={estado} house={house} resumo={resume} cargoo={cargo} cpfValue={cpf} cidadeValue={cidade} endereçoValue={endereço} nomeValue={nomeCompleto} emailValue={email}/>}
      </main>
    );
  }
}

export default Forms;
