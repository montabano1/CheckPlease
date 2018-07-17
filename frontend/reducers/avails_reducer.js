import {
  RECEIVE_AVAILS,
  RECEIVE_AVAIL,
  REMOVE_AVAIL,
} from '../actions/avail_actions';
import { RECEIVE_RESTAURANTS} from '../actions/restaurant_actions'
import { merge } from 'lodash';

const AvailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AVAILS:
    case RECEIVE_RESTAURANTS:
      return merge({}, action.avails);
    case RECEIVE_AVAIL:
      return merge({}, state, {[action.avail.id]: action.avail});
    case REMOVE_AVAIL:
      let newState = merge({}, state);
      delete newState[action.availId];
      return newState;
    default:
      return state;
  }
};

export default AvailsReducer;
