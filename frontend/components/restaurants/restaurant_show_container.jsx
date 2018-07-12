import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
    fetchRestaurants: id => dispatch(fetchRestaurants(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
