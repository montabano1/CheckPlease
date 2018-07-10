import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const updateUser = user => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(user => {
      return dispatch(receiveUser(user));
    });
  };
};
