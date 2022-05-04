import React from 'react';
import PropTypes from 'prop-types';

class Estado extends React.Component {
  render () {
    const { value , handleChange } = this.props;
    let error = undefined;
    if(value.length > 15) {
      error = 'Esse estado não existe'
    }
    return (
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
    </label>
    )
  }
}

Estado.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default Estado