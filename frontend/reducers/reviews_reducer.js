import merge from 'lodash/merge';

import {
  RECEIVE_RESTAURANT,
  RECEIVE_REVIEW,
} from '../actions/restaurant_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.restaurant.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    default:
      return state;
  }
};

export default reviewsReducer;
