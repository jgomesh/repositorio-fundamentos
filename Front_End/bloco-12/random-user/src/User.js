import React from 'react';

class User extends React.Component {
  render() {
    const { email, name, image, age} = this.props
    return (
      <div className="body">
        <img src={image} alt='Foto de perfil'/><br/>
        Email: {email}.<br/>
        Name: {name}.<br/>
        Age: {age}<br/>
      </div>
    );
  }
}

export default User