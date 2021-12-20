import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Comidas from './pages/Comidas/Comidas';
import Bebidas from './pages/Bebidas/Bebidas';
import Prato from './pages/Receitas/Prato';
import Drink from './pages/Receitas/Drink';
import ProcessoPrato from './pages/Receitas em Processo/ProcessoPrato';
import ProcessoDrink from './pages/Receitas em Processo/ProcessoDrink';
import Explorar from './pages/Explorar/Explorar';
import ExplorarComidas from './pages/Explorar/ExplorarComidas';
import ExplorarBebidas from './pages/Explorar/ExplorarBebidas';
import ExplorarIngredientesComidas from './pages/Explorar/ExplorarIngredientesComidas';
import ExplorarIngredientesBebidas from './pages/Explorar/ExplorarIngredientesBebidas';
import ExplorarAreaComidas from './pages/Explorar/ExplorarAreaComidas';
import NotFound from './pages/NotFound/NotFound';
import Perfil from './pages/Perfil/Perfil';
import ReceitasFeitas from './pages/Receitas/ReceitasFeitas';
import ReceitasFavoritas from './pages/Receitas/ReceitasFavoritas';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/:id" component={ Prato } />
        <Route exact path="/bebidas/:id" component={ Drink } />
        <Route path="/comidas/:id/in-progress" component={ ProcessoPrato } />
        <Route path="/bebidas/:id/in-progress" component={ ProcessoDrink } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExplorarIngredientesComidas }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarIngredientesBebidas }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarAreaComidas } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
