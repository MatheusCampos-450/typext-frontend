import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Route from 'components/Route';

import Recovery from 'pages/Recovery';
import UserUpdate from 'pages/UserUpdate';
import ResetPassword from 'pages/ResetPassword';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Minute from 'pages/Minute';
import Login from 'pages/Login';
import Invite from 'pages/Invite';
import NotFound from 'pages/NotFound';
import Users from 'pages/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/user/update" isPrivate component={UserUpdate} />
        <Route path="/home" exact isPrivate component={Home} />
        <Route path="/minute" isPrivate component={Minute} />
        <Route path="/reset/:email" component={ResetPassword} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/login" component={Login} />
        <Route path="/invite/:email" component={Register} />
        <Route path="/404" component={NotFound} />

        <Route path="/invite" exact isPrivate onlyAdmin component={Invite} />
        <Route path="/users" isPrivate onlyAdmin component={Users} />

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
