import React from 'react';
import { Route, Switch } from 'react-router';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import { FullScreen } from './style/Screen';

function App() {
  return (
    <FullScreen>
      <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/auth" component={AuthPage} />
      </Switch>
    </FullScreen>
  );
}

export default App;
