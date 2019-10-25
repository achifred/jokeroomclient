import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat';
import Join from './pages/join';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact render={props => <Join {...props} />} />
            <Route path="/chat" exact render={props => <Chat {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
