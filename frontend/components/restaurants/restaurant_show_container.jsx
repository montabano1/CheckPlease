import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';
import { selectReviewsForRestaurant } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.entities.restaurants[ownProps.match.params.restaurantId]
  const reviews = selectReviewsForRestaurant(state.entities, restaurant);
  return {
    restaurant: restaurant || {},
    reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
    fetchRestaurants: id => dispatch(fetchRestaurants(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
