import {
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
} from '../actions/reservation_actions';
import { merge } from 'lodash';

const ReservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return merge({}, state, {[action.reservation.id]: action.reservation});
    case REMOVE_RESERVATION:
      let newState = merge({}, state);
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
};

export default ReservationsReducer;
