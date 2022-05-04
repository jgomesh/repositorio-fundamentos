import React from 'react';

class UserInputs extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <fieldset className='user-inputs'>
        <h1>Informações usuário</h1>
        <input type="text" name="" id="" maxlength='40'placeholder='Nome' required/>
        <input type="email" name="" id="" maxlength='50' placeholder='Email' required/>
        <input type="text" name="" id="" maxlength='11'placeholder='CPF' required/>
        <select >
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
        <div>
        <input type="radio" id="casa" name="house" value="huey" required/>
        <label for="casa">Casa</label>
        </div>
        <div>
        <input type="radio" id="apartamento" name="house" value="apartamento"/>
        <label for="casa">Apartamento</label>
        </div>
        
      </fieldset>
    )
  }
}

export default UserInputs