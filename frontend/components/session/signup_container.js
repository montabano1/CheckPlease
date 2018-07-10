import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';


function mapStateToProps(state, ownProps) {
  return {
    buttonText: "SIGN UP"
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formAction: user => dispatch(signup(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
