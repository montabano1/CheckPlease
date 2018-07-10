import React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { connect } from 'react-redux';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { logout } from '../actions/session_actions';
import Modal from './modal/modal';

function App({ loggedIn, user, logout }) {
  return (

    <HashRouter>
      <div>
        <Modal modal='login' />
        Hello
      </div>
    </HashRouter>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
