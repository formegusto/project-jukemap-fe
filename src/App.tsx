import React from 'react';
import { Route, Switch } from 'react-router';
import AuthPage from './pages/AuthPage';
import PostJukePage from './pages/PostJukePage';
import MainPage from './pages/MainPage';
import { FullScreen } from './style/Screen';

function App() {
  return (
    <FullScreen>
      <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/juke" component={PostJukePage} />
      </Switch>
    </FullScreen>
  );
}

export default App;
