import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Welcome to CheckPlease</h1>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={ LoginContainer } />
    <AuthRoute exact path="/signup" component={ SignupContainer } />

  </div>
);

export default App;
