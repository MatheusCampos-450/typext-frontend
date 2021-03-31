import React from 'react';
import RecoveryPassword from 'pages/RecoveryPassword';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NewPassword from 'pages/NewPassword';
import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/recovery-password" exact component={RecoveryPassword} />
        <Route path="/new-password" exact component={NewPassword} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
