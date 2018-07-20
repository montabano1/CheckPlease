import React from "react";
import { connect } from "react-redux";
import RestaurantShowReservation from './restaurant_show_reservation';
import { searchRestaurants, fetchRestaurant } from '../../actions/restaurant_actions';
import { showConfirmation } from '../../actions/reservation_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: ownProps.restaurant,
    avails: state.entities.avails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: search => dispatch(searchRestaurants(search)),
    showConfirmation: (payload) => dispatch(showConfirmation(payload)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShowReservation);
