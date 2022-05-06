import React from 'react';

class LastJob extends React.Component {
  render() {
    const { handleChange, alertAtention, resumo, cargoo, describe} = this.props;

    return (
      <fieldset className='user-inputs'>
        <h1>Ultimo emprego</h1>
        <textarea className='width100' maxLength='1000' value={resumo} name='resume'required placeholder='Resumo do currículo'  onChange={handleChange} ></textarea>
        <textarea className='width100' maxLength='40' value={cargoo} name='cargo'required placeholder='Cargo'  onMouseEnter={alertAtention} onChange={handleChange} ></textarea>
        <input className='width100' maxLength='500' value={describe} type="text" name="descrição" placeholder='Descrição do cargo' onChange={handleChange} required/>
      </fieldset>
    )
  }
}

export default LastJob