import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  };
};

export const receiveRestaurant = restaurant => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant
  };
};

export const fetchRestaurants = () => {
  return dispatch => {
    return APIUtil.fetchRestaurants().then(
      restaurants => dispatch(receiveRestaurants(restaurants))
    );
  };
};

export const fetchRestaurant = (id) => {
  return dispatch => {
    return APIUtil.fetchRestaurant(id).then(
      restaurant => dispatch(receiveRestaurant(restaurant))
    );
  };
};
export const createRestaurant = (restaurant) => {
  return dispatch => {
    return APIUtil.createRestaurant(restaurant).then(
      restaurant => dispatch(receiveRestaurant(restaurant))
    );
  };
};
