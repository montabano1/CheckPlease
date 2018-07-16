import {
  RECEIVE_AVAILS,
  RECEIVE_AVAIL,
  REMOVE_AVAIL,
} from '../actions/avail_actions';
import { merge } from 'lodash';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AVAILS:
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

export default PostsReducer;
