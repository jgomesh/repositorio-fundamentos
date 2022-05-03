import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroIndex: 0
    }
    this.nextPokemon = this.nextPokemon.bind(this)
    this.previousPokemon = this.previousPokemon.bind(this)
    this.eletrickPokemons = this.eletrickPokemons.bind(this)
    this.firePokemons = this.firePokemons.bind(this)
    this.bugPokemons = this.bugPokemons.bind(this)
    this.poisonPokemons = this.poisonPokemons.bind(this)
    this.psychicPokemons = this.psychicPokemons.bind(this)
    this.normalPokemons = this.normalPokemons.bind(this)
    this.dragonPokemons = this.dragonPokemons.bind(this)
  }

  nextPokemon() {
    if (this.state.numeroIndex < pokemons.length - 1) {
      this.setState((estadoAnterior, _props) => ( {
        numeroIndex: estadoAnterior.numeroIndex + 1
      }));
    } else if (this.state.numeroIndex === pokemons.length - 1){
      this.setState((estadoAnterior, _props) => ( {
        numeroIndex: 0
      }));
    }
  }

  previousPokemon() {
    if (this.state.numeroIndex === 0) {
      this.setState((_estadoAnterior, _props) => ( {
        numeroIndex: pokemons.length - 1
      }));
    } else {
      this.setState((estadoAnterior, _props) => ( {
        numeroIndex: estadoAnterior.numeroIndex - 1
      }));
    }
  }

  eletrickPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 0
    }));
    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
    pokemon.classList.remove('active')
    if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[1].classList.add('active')
  }

  firePokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 1
    }));
    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[2].classList.add('active')
  }

  bugPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 2
    }));

    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[3].classList.add('active')
  }

  poisonPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 3
    }));

    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[4].classList.add('active')
  }

  psychicPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 4
    }));

    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[5].classList.add('active')
  }

  normalPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 7
    }));

    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[6].classList.add('active')
  }


  dragonPokemons() {
    this.setState((_estadoAnterior, _props) => ( {
      numeroIndex: 8
    }));
    const eletrickPokemon = document.querySelectorAll('.mybtn');
    eletrickPokemon.forEach((pokemon, index) => {
      pokemon.classList.remove('active')
      if (index > eletrickPokemon.length - 3) {
        pokemon.disabled = true;
        pokemon.classList.add('deactive')
      }
    })
    eletrickPokemon[7].classList.add('active')
  }

  allPokemons() {
    const eletrickPokemon = document.querySelectorAll('.mybtn');

    eletrickPokemon.forEach((pokemon) => {
        pokemon.disabled = false;
    
          pokemon.classList.remove('active')
 
        pokemon.classList.remove('deactive')
      })
      eletrickPokemon[0].classList.add('active')
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        
        <Pokemon key={pokemons[this.state.numeroIndex].id} pokemon={pokemons[this.state.numeroIndex]} />

        <button className='mybtn active' onClick={this.allPokemons}>All</button>
        <button className='mybtn' onClick={this.eletrickPokemons}>Electric</button>
        <button className='mybtn' onClick={this.firePokemons}>Fire</button>
        <button className='mybtn' onClick={this.bugPokemons}>Bug</button>
        <button className='mybtn' onClick={this.poisonPokemons}>Poison</button>
        <button className='mybtn' onClick={this.psychicPokemons}>Psychic</button>
        <button className='mybtn' onClick={this.normalPokemons}>Normal</button>
        <button className='mybtn' onClick={this.dragonPokemons}>Dragon</button>

        <div>
          <button className='mybtn green' onClick={this.previousPokemon}>Anterior</button>
          <button className='mybtn green' onClick={this.nextPokemon}>Próximo</button>
        </div>

      </div>
    );
  }

}

export default App;