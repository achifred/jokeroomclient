import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat';
import Join from './pages/join';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
