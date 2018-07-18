import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RESERVATION_CONFIRMATION } from '../actions/reservation_actions';
import { merge } from 'lodash';

const defaultState = {
  id: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case RESERVATION_CONFIRMATION:
      return merge({}, state, {conf: action.payload});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}
