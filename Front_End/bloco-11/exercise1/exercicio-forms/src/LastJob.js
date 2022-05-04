import React from 'react';

class LastJob extends React.Component {
  render() {
    const { handleChange, alertAtention} = this.props;

    
    return (
      <fieldset>
        <h3>Ultimo emprego</h3>
        <textarea maxlength='1000' name='resume'required placeholder='Resumo do currículo'  onChange={handleChange} ></textarea>
        <textarea maxlength='40' name='cargo'required placeholder='Cargo'  onMouseEnter={alertAtention} onChange={handleChange} ></textarea>
        <input maxlength='500' type="text" name="descrição" placeholder='Descrição do cargo' onChange={handleChange} required/>
      </fieldset>
    )
  }
}

export default LastJob