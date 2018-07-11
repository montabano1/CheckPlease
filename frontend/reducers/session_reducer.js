import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  id: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}
