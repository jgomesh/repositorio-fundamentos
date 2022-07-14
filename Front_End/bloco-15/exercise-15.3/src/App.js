import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/clients" component={ Clients } />
    </Switch>
  );
}

export default App;
