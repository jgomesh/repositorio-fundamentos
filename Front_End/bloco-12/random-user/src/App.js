import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      api: {
        dob: {age:''},
        name:{first: '', last: ''},
        picture: {medium: ''},
      },
    };
  }

  async componentDidMount() {
    try {
      const url = `https://api.randomuser.me/`;
      const response = await fetch(url)
      const dataJson = await response.json()
      this.setState({ api: dataJson.results[0]})
    } catch (error) {
      console.log(error)
    }
  }

  shouldComponentUpdate(_nextProps, nextState){
    const { email, dob: { age } } = nextState.api
    let result;
    if(parseInt(age) < 50) {
      console.log('menor que 50')
      console.log(age)
      console.log(email)
      result =  true;
    } else {
      alert('próximo usuario maior que 50')
      console.log(age)
      console.log(email)
      result =  false;
    }
    return result;
  }

  //foto, nome, email e idade do usuário.
  render() {
    const { email, name: { first, last }, picture: {medium}, dob: { age }} = this.state.api
    return (
      <div className="body">
        <img src={medium} alt='Foto de perfil'/><br/>
        Email: {email}.<br/>
        Name: {`${first} ${last}`}.<br/>
        Age: {age}<br/>
        <button onClick={this.componentDidMount}>Change</button>
      </div>
    );
  }
}

export default App;