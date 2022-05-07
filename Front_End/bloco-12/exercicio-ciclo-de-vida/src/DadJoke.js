import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject, 
    })
  }

 componentDidMount() {
    this.saveJoke()
  }

  async saveJoke() {
    this.setState({
      loading: true,
  })
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    await this.fetchJoke();
    const joke = this.renderJokeElement()
    this.state.storedJokes.push(joke)
    this.setState({
      loading: false,
    })
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map((item, id) => (<p key={id}>{item}</p>))}
          {this.state.loading && loadingElement}
        </span><br/>
        <button type='button' onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }
}

export default DadJoke;
