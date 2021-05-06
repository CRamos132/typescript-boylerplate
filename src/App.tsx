import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <h1>Typescript boylerplate</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
