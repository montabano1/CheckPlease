import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return { formType: 'Sign in'};
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
