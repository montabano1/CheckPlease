import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservation = reservation => {
  return {
    type: RECEIVE_RESERVATION,
    reservation
  };
};

export const removeReservation = reservationId => {
  return {
    type: REMOVE_RESERVATION,
    reservationId
  };
};


export const createReservation = (reservation) => {
  return dispatch => {
    return APIUtil.createReservation(reservation).then(
      reservation => dispatch(receiveReservation(reservation))
    );
  };
};
export const deleteReservation = (reservationId) => {
  return dispatch => {
    return APIUtil.deleteReservation(reservationId).then(
      reservation => dispatch(removeReservation(reservationId))
    );
  };
};
