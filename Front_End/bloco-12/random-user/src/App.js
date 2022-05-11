import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
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
  //const c = {teste1:{teste2:{teste3:1}}}
  //const {teste1:{teste2:{teste3}}} = c;
  //console.log(teste3);
  render() {

    const { email, dob: { age }} = this.state.api

    return (
      <div className="body">  
        Email: {email}<br/>
        {age}
      </div>
    );
  }
}

export default App;