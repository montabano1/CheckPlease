import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import Reservation from './reservation';

const mapStateToProps = (state) => {
  return {
    restaurant: state.session.conf.restaurant,
    availid: state.session.conf.availid,
    time: state.session.conf.time,
    currentUser: state.entities.users[state.session.id] || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: res => dispatch(createReservation(res))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);