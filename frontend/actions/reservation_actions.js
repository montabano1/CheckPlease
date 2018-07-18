import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RESERVATION_CONFIRMATION = 'RESERVATION_CONFIRMATION';

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

export const reservationConfirmation = payload => {
  return {
    type: RESERVATION_CONFIRMATION,
    payload
  };
};

export const showConfirmation = payload => {
  return dispatch => dispatch(reservationConfirmation(payload));
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
