import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/auth/login';
import { Signup } from './components/auth/signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;