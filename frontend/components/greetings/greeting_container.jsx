import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  loginDummy: () => dispatch(login({username:'monte', email:'monte@monte.com', password:'password'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
