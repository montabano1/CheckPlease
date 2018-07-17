import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { RestaurantSearchIndexItem } from './restaurant_search_index_item';
import { fetchRestaurants } from '../../actions/restaurant_actions';


class RestaurantSearchIndexContainer extends React.Component {

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return (
        <Link to={`/restaurants/${rest.id}`} key={rest.id}>
          <RestaurantSearchIndexItem restaurant={rest} key={rest.id} />
        </Link>
      );
    });


    return (
      <main >
        <ul className='search-index-list'>{restaurants}</ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const restaurants = Object.values(state.entities.restaurants);
  const avails = Object.values(state.entities.avails);
  return {
    restaurants,
    avails,
    currentuser: state.entities.users[state.session.id] || {username: ''}
  };
};


export default connect(mapStateToProps, null)(RestaurantSearchIndexContainer);
