
import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantShow = ({ restaurant }) => {
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
  )
};

export default RestaurantShow;
