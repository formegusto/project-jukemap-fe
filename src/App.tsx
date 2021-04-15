import React from 'react';
import { Route, Switch } from 'react-router';
import IntroContainer from './containers/IntroContainer';

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  return (
    <Switch>
      <Route path="/" component={IntroContainer} exact/>
    </Switch>
  );
}

export default App;
