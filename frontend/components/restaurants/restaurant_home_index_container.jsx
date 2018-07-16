import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { RestaurantHomeIndexItem } from './restaurant_home_index_item';
import { fetchRestaurants } from '../../actions/restaurant_actions';


class RestaurantHomeIndexContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return (
        <Link to={`/restaurants/${rest.id}`} key={rest.id}>
          <RestaurantHomeIndexItem restaurant={rest} key={rest.id} />
        </Link>
      );
    });


    return (
      <main >
        <section className='home-index-container-heading'>
          Recommended for you {this.props.currentuser.username}:
        </section>
        <ul className='home-index-list'>{restaurants}</ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const restaurants = Object.values(state.entities.restaurants);
  return {
    restaurants,
    currentuser: state.entities.users[state.session.id] || {username: ''}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHomeIndexContainer);
