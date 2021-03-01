import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';
import Aula from './components/Aula';
import Assistir from './components/Assistir';

import loginReducer from './reducers/loginReducer';
import PrivateRoute from './components/PrivateRoute';
import AcessoNegado from './components/AcessoNegado';

const store = createStore(loginReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav></Nav>

        <Switch>
          <Route exact path="/" component={Home} />

          <PrivateRoute path="/aulas/:id">
            <Aula />
          </PrivateRoute>

          <Route path="/aulas">
            <Aulas />
          </Route>

          <Route path="/assistir">
            <Assistir />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/acesso-negado">
            <AcessoNegado />
          </Route>

          <Route path="*">
            <div className="page">
              Essa rota não existe
            </div>
          </Route> 
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
