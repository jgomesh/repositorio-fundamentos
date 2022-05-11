import React from 'react'
import './App.css';
import User from './User'

class App extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      loading: true,
      loadingElement: 'Carregando...',
      api: {
        dob: {age:''},
        name:{first: '', last: ''},
        picture: {medium: ''},
      },
    };
  }
  async componentDidMount() {
    this.setState({ loading: true});
    try {
      const url = `https://api.randomuser.me/`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.setState({ api: dataJson.results[0]});
      this.setState({ loading: false});
    } catch (error) {
      console.log(error);
    }
  }
  shouldComponentUpdate(_nextProps, nextState){
    let { email, dob: { age } } = nextState.api
    let result;
    if(parseInt(age) < 50) {
      console.log('menor que 50')
      console.log(age)
      console.log(email)
      result =  true;
    } else {
      result =  false;
    }
    return result;
  }

  //foto, nome, email e idade do usuário.
  render() {
    const { email, name: { first, last }, picture: {medium}, dob: { age }} = this.state.api
    const {loading , loadingElement} = this.state
    return (
      <div className="body">
        {loading ? loadingElement: null}<br/>
        {loading === false && <User email={email} name={`${first} ${last}`} image={medium} age={age}/>}
      </div>
    );
  }
}

export default App;