import * as APIUtil from '../util/avail_api_util';

export const RECEIVE_AVAILS = 'RECEIVE_AVAILS';
export const RECEIVE_AVAIL = 'RECEIVE_AVAIL';
export const REMOVE_AVAIL = 'REMOVE_AVAIL';

export const receiveAvails = avails => {
  return {
    type: RECEIVE_AVAILS,
    avails
  };
};

export const receiveAvail = avail => {
  return {
    type: RECEIVE_AVAIL,
    avail
  };
};

export const removeAvail = availId => {
  return {
    type: REMOVE_AVAIL,
    availId
  };
};

export const fetchAvails = () => {
  return dispatch => {
    return APIUtil.fetchAvails().then(
      avails => dispatch(receiveAvails(avails))
    );
  };
};

export const fetchAvail = (id) => {
  return dispatch => {
    return APIUtil.fetchAvail(id).then(
      avail => dispatch(receiveAvail(avail))
    );
  };
};
export const createAvail = (avail) => {
  return dispatch => {
    return APIUtil.createAvail(avail).then(
      avail => dispatch(receiveAvail(avail))
    );
  };
};
export const updateAvail = id => {
  return dispatch => {
    return APIUtil.updateAvail(id).then(
      avail => dispatch(receiveAvail(avail))
    );
  };
};
export const deleteAvail = (availId) => {
  return dispatch => {
    return APIUtil.deleteAvail(availId).then(
      avail => dispatch(removeAvail(availId))
    );
  };
};
