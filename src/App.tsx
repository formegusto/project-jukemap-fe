import React from 'react';
import { Route, Switch } from 'react-router';
import MainContainer from './containers/MainContainer';
import { FullScreen } from './style/Screen';

function App() {
  return (
    <FullScreen>
      <Switch>
          <Route path="/" component={MainContainer} />
      </Switch>
    </FullScreen>
  );
}

export default App;
