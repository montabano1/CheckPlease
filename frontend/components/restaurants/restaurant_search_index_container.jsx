import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import RestaurantSearchIndexItemContainer from './restaurant_search_index_item_container';
import { fetchRestaurants } from '../../actions/restaurant_actions';

class RestaurantSearchIndexContainer extends React.Component {

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return (
          <div className='search-index-item-container' key={rest.id}>
            <RestaurantSearchIndexItemContainer restaurant={rest}
            avails={this.props.avails} key={rest.id}/>
          </div>
      );
    });

    return (
      <main className='search-index-container'>
        <section className='search-filters'></section>
        <ul className='search-index-list'>{restaurants}</ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const restaurants = Object.values(state.entities.restaurants);
  let avails = Object.values(state.entities.avails);
  return {
    restaurants,
    avails,
    currentuser: state.entities.users[state.session.id] || {username: ''}
  };
};



export default connect(mapStateToProps, null)(RestaurantSearchIndexContainer);
