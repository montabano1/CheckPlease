import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return { formType: 'signup'};
};

const mapDispatchToProps = dispatch => {
  return {
		processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
