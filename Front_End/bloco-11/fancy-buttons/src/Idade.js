import React from 'react';

class Idade extends React.Component {
  render () {
    const { value , handleChange } = this.props;
    let error = undefined;
    if(parseFloat(value) > 100) {
      error = 'Impossivel!'
    }
    return (
      <label>
        <input
        type="number"
        name="idade"
        value={value}
        onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
    
  }
}

export default Idade