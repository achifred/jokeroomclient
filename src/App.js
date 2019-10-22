import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat';
import Join from './pages/join';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Join {...props} />} />
        <Route path="/chat" exact render={props => <Chat {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
