import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, sendErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    formType: 'Sign in',
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    sendErrors: (errors) => dispatch(sendErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
