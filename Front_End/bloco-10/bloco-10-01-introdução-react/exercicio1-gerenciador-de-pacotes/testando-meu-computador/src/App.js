import logo from './logo.svg';
import './App.css';

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;


function App() {
  return (
    <div className="App">
      {container} 
    </div>
  );
}

export default App;
