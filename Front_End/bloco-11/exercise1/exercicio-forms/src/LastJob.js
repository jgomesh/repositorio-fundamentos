import React from 'react';

class LastJob extends React.Component {
  render() {
    const { handleChange, alertAtention} = this.props;

    
    return (
      <fieldset className='user-inputs'>
        <h1>Ultimo emprego</h1>
        <textarea className='width100' maxlength='1000' name='resume'required placeholder='Resumo do currículo'  onChange={handleChange} ></textarea>
        <textarea className='width100' maxlength='40' name='cargo'required placeholder='Cargo'  onMouseEnter={alertAtention} onChange={handleChange} ></textarea>
        <input className='width100' maxlength='500' type="text" name="descrição" placeholder='Descrição do cargo' onChange={handleChange} required/>
      </fieldset>
    )
  }
}

export default LastJob