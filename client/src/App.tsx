import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Login } from './components/auth/login';
import { Signup } from './components/auth/signup';
import { Dashboard } from './components/dashboard/dashboard';
import { CheckAuth } from './auth/CheckAuth';
import { AddTodo } from './components/pages/addTodo';
import { DeletedTodo } from './components/pages/deletedTodo';


function App() {

  interface IUserStatus {
    status: boolean | null;
  }

  const [userStatus, setUserStatus] = useState<IUserStatus>({ status: null })
  useEffect(() => {
    CheckAuth()
      .then((res) => {
        setUserStatus({ status: true })
      })
      .catch((err) => {
        setUserStatus({ status: false })
      })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => (
            userStatus.status === true ? <Redirect to="/dashboard" /> : (userStatus.status === false ? <Login {...props} /> : null)
          )} />
          <Route path="/signup" render={props => (
            userStatus.status === true ? <Redirect to="/dashboard" /> : (userStatus.status === false ? <Signup {...props} /> : null)
          )} />
          <Route path="/dashboard" render={props => (
            userStatus.status === true ? <Dashboard {...props} /> : (userStatus.status === false ? <Redirect to="/" /> : null)
          )} />
          <Route path="/new" render={props => (
            userStatus.status === true ? <AddTodo {...props} /> : (userStatus.status === false) ? <Redirect to="/" /> : null
          )} />
          <Route path="/deleted" render={props => (
            userStatus.status === true ? <DeletedTodo {...props} /> : (userStatus.status === false) ? <Redirect to="/" /> : null
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;