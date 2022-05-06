import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

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
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObjs.joke}</p>
        <button type='button' onClick='this.saveJoke'>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <span>RENDERIZAÇÂO CONDICIONAL!</span>

      </div>
    );
  }
}

export default DadJoke;
