import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal className='modal'/>
    <header>
      <h1>logo</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
