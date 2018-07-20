import * as APIUtil from '../util/restaurant_api_util';
import * as SearchUtil from '../util/search_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';



export const receiveRestaurants = ({restaurants, avails, searchppl}) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants,
    avails: avails,
    searchppl: searchppl || {}
  };
};

export const receiveRestaurant = restaurant => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant
  };
};

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});
export const fetchRestaurants = () => {
  return dispatch => {
    return APIUtil.fetchRestaurants().then(
      payload => dispatch(receiveRestaurants(payload))
    );
  };
};
export const searchRestaurants = (search) => {
  return dispatch => {
    debugger
    return SearchUtil.searchRestaurants(search).then(
      payload => {
        dispatch(receiveRestaurants(payload));
      }
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


export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
