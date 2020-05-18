import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig';

import Contenedor from './components/Contenedor';
import NoEncontrado from './components/NoEncontrado';

function App() {

  const body = () => {
    return (
      <ThemeProvider theme={theme}>

        <Contenedor />

      </ThemeProvider>
    )
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={body} />
        <Route> 
          <NoEncontrado />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;