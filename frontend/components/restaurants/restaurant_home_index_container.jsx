import React from "react";
import { connect } from "react-redux";
import { RestaurantHomeIndexItem } from './restaurant_home_index_item'
import { fetchRestaurants } from '../../actions/restaurant_actions'


class restaurantHomeIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return (
        <RestaurantHomeIndexItem restaurant={rest} key={rest.id} />
      );
    });


    return (
      <main>
        <h3>Restaurants</h3>
        <ul>{restaurants}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(restaurantHomeIndex);
