import React from 'react';

class UserInputs extends React.Component {
  render() {
    let { handleChange, nomeValue, blurFunction, cidadeValue} = this.props;

    if(isNaN(parseInt(cidadeValue[0]))) {
      console.log(cidadeValue)
    } else {
      cidadeValue = ''
    }
    
    return (
      <fieldset className='user-inputs'>
        <h1>Informações usuário</h1>
        <input type="text" name="nomeCompleto" maxlength='40' placeholder='Nome' value={nomeValue} onChange={handleChange} required/>
        <input type="email" name="email" maxlength='50' placeholder='Email' onChange={handleChange} required/>
        <input type="text" name="cpf" maxlength='11' placeholder='CPF' onChange={handleChange} required/>
        <input type="text" name="endereço" maxlength='200' placeholder='Endereço' onChange={handleChange} required/>
        <input type="text" name="cidade" maxlength='28' placeholder='Cidade' value={cidadeValue} onBlur={blurFunction}onChange={handleChange} required/>
        <select name='estado'onChange={handleChange}>
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
        <div name='radio'onChange={handleChange}>
          <div>
          <input type="radio" id="casa" name="house" value="casa" required/>
          <label for="casa">Casa</label>
          </div>
          <div>
          <input type="radio" id="apartamento" name="house" value="apartamento"/>
          <label for="casa">Apartamento</label>
          </div>
        </div> 
      </fieldset>
    )
  }
}

export default UserInputs