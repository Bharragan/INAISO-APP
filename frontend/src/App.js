import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        {/* Otras rutas */}
        <Route path="/login" component={Login} />
        <Route path="/" exact>
          {/* Coloca aquí el contenido de tu página de inicio */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
