import { merge } from 'lodash';
import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      const newRestaurant = { [action.restaurant.restaurant.id]: action.restaurant.restaurant };
      return merge({}, state, newRestaurant);
    default:
      return state;
  }
};

export default restaurantsReducer;
