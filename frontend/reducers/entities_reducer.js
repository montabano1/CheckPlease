import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import availsReducer from './avails_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  avails: availsReducer,
  reviews: reviewsReducer
});
