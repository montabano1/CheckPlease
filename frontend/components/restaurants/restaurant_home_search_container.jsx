import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { RestaurantHomeIndexItem } from './restaurant_home_index_item';

class RestaurantHomeSearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <main className='home-search-container'>
          <section className='home-search-container-heading'>Find your table for any occasion</section>
          <section className='home-search-dropdown-left'> DROPDOWN GOES HERE </ section >
          <section className='home-search-dropdown-center'> DROPDOWN GOES HERE </ section >
          <section className='home-search-dropdown-right'> DROPDOWN GOES HERE </ section >
          <section className='home-search-input'> SEARCH INPUT GOES HERE </ section >
          <button className='home-search-submit'> Let's go </ button >
      </main>
    );
  }

}

const mapStateToProps = state => {
  const restaurants = Object.values(state.entities.restaurants);
  return { restaurants };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHomeSearchContainer);
