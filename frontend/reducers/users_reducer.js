import {  RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};
