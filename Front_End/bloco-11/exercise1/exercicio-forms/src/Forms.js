import React from 'react';
import UserInputs from './UserInputs';
import './Forms.css'

class Forms extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nomeCompleto: '',
    };
  }

  handleChange({ target }) {
    let { name, value } = target;
    
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  render() {
    const {nomeCompleto} = this.state
    return (
      <form className="form">
        <UserInputs nomeValue={nomeCompleto} handleChange={this.handleChange}/>
      </form>
    );
  }
}

export default Forms;
