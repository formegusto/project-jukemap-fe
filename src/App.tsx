import React from 'react';
import { Route, Switch } from 'react-router';
import IntroContainer from './containers/IntroContainer';

function App() {
  return (
    <Switch>
      <Route path="/" component={IntroContainer} exact/>
    </Switch>
  );
}

export default App;
