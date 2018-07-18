import React from "react";
import { connect } from "react-redux";
import RestaurantHomeSearch from './restaurant_home_search';
import { searchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: search => dispatch(searchRestaurants(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHomeSearch);
