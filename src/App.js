import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import InviteLink from './components/InviteLink';
import Success from './components/Success';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/test">
          <Form />
        </Route>
        <Route path="/">
          <InviteLink />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
