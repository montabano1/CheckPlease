import { merge } from 'lodash';
import {
  RECEIVE_REVIEW,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT
 } from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, action.restaurants);
    case RECEIVE_RESTAURANT:
      debugger
      const newRestaurant = { [action.restaurant.restaurant.id]: action.restaurant.restaurant };
      return merge({}, state, newRestaurant);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = merge({}, state);
      newState[review.restaurant_id].reviewIds.push(review.id);
      newState[review.restaurant_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;
