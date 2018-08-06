import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal, loginDummy }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => loginDummy()} id='modal-signup'>Demo</button>
      &nbsp;&nbsp;
      <button onClick={() => openModal('signup')} id='modal-signup'>Sign up</button>
      &nbsp;&nbsp;
      <button onClick={() => openModal('login')} id='modal-login'>Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link to='/'>
        <button className="header-button" onClick={logout}>Log Out</button>
      </Link>
      &nbsp;&nbsp;
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
    </hgroup>
  );
  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
