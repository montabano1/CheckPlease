import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import reservation from './reservation';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    restaurantId: ownProps.location.pathname.split('/')[ownProps.location.pathname.split('/').length-1],
    time: ownProps.location.search.split('/')[ownProps.location.search.split('/').length-1]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: res => dispatch(createReservation(res))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reservation);
