import React from 'react';

class UserInputs extends React.Component {
  render() {
    let { handleChange, nomeValue, cidadeValue, emailValue, cpfValue, endereçoValue} = this.props;

    if(isNaN(parseInt(cidadeValue[0]))) {
    } else {
      cidadeValue = ''
    }

    return (
      <fieldset className='user-inputs'>
        <h1>Informações usuário</h1>
        <input className='width100' type="text" name="nomeCompleto" maxLength='40' placeholder='Nome' value={nomeValue} onChange={handleChange} required/>
        <input className='width100' type="email" name="email" maxLength='50' placeholder='Email' value={emailValue} onChange={handleChange} required/>
        <input className='width100' type="text" name="cpf" maxLength='15' placeholder='CPF' value={cpfValue} onChange={handleChange} required/>
        <input className='width100' type="text" name="endereço" maxLength='200' placeholder='Endereço' value={endereçoValue} onChange={handleChange} required/>
        <input className='width100' type="text" name="cidade" maxLength='28' placeholder='Cidade' value={cidadeValue} onChange={handleChange} required/>
        <select className='width100' name='estado'onChange={handleChange}>
          <option>AC</option>
          <option>AL</option>
          <option>AP</option>
          <option>AM</option>
          <option>BA</option>
          <option>CE</option>
          <option>DF</option>
          <option>GO</option>
          <option>ES</option>
          <option>MA</option>
          <option>MT</option>
          <option>MS</option>
          <option>MG</option>
          <option>PA</option>
          <option>PB</option>
          <option>PR</option>
          <option>PE</option>
          <option>PI</option>
          <option>RJ</option>
          <option>RN</option>
          <option>RS</option>
          <option>RO</option>
          <option>RR</option>
          <option>SC</option>
          <option>SP</option>
          <option>SE</option>
          <option>TO</option> 
        </select>
        <div className='width100' name='radio'onChange={handleChange}>
          <div>
            <input type="radio" id="casa" className='selected' name="house" value="casa" required/>
            <label htmlFor="casa">Casa</label>
          </div>
          <div>
            <input type="radio" className='selected' id="apartamento" name="house" value="apartamento"/>
            <label htmlFor="casa">Apartamento</label>
          </div>
        </div> 
      </fieldset>
    )
  }
}

export default UserInputs