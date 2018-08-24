import React from "react";
import { connect } from "react-redux";
import RestaurantHomeSearch from './restaurant_home_search';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: search => dispatch(searchRestaurants(search)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHomeSearch);
