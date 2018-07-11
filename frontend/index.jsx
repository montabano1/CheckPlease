import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
	let store;
	if (window.currentUser) {
	  const preloadedState = {
	    entities: {
	      users: { [window.currentUser.id]: window.currentUser }
	    },
	    session: { id: window.currentUser.id }
	  };
	  store = configureStore(preloadedState);
	  delete window.currentUser;
	} else {
	  store = configureStore();
	}
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById('root');
  window.login = actions.login;
  window.logout = actions.logout;
  window.signup = actions.signup;
  window.receiveCurrentUser = actions.receiveCurrentUser;

  ReactDOM.render(<Root store={ store }></Root>, root);
  // ReactDOM.render(<h1>Hello rowan</h1>, root);

});
