import React from 'react';
import { Route, Switch } from 'react-router';
import IntroComponent from './components/IntroComponent';

function App() {
  return (
    <Switch>
      <Route path="/" component={IntroComponent} exact/>
    </Switch>
  );
}

export default App;
