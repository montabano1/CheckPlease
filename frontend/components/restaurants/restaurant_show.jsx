import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRestaurant } from './restaurant_show_container';

class RestaurantShow extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const { restaurant } = this.props;
    if (!restaurant) {
      return <div>Loading...</div>;
    }
    return (
      <div className='single-restaurant-show'>
        <Link to="/">Back to Home Page</Link>
        <h1 className='restaurant-show-name'>{restaurant.name}</h1>
        <div className="restaurant-show-info">
          Price - {restaurant.price}
          Cuisine - {restaurant.cuisine}
          Description - {restaurant.description}
        </div>
      </div>
    );
  }
}

export default RestaurantShow;



// const restaurant = this.state.entities.restaurants[this.props.match.params.restaurantId];
