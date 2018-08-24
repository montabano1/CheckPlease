import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';
import * as restactions from './actions/restaurant_actions';
import * as availactions from './actions/avail_actions';
import * as rezactions from './actions/reservation_actions';
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
	window.dispatch = store.dispatch;
  window.getState = store.getState;
	window.signup = actions.signup;
	window.createRestaurant = restactions.createRestaurant;
  window.fetchRestaurants = restactions.fetchRestaurants;
  window.fetchRestaurant = restactions.fetchRestaurant;
  window.fetchAvail = availactions.fetchAvail;
  window.fetchAvails = availactions.fetchAvails;
  window.createReservation = rezactions.createReservation;

  const root = document.getElementById('root');


  ReactDOM.render(<Root store={ store }></Root>, root);

});
