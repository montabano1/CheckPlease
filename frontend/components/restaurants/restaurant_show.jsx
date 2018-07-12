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
      <div>
        <Link id='home-link' to="/">Home</Link>
        <div className='single-restaurant-show'>
          <picture className='restaurant-picture-container'>
            <picture className='half-image'>
              <img src={window.restaurantOria} />
            </picture>
            <picture className='half-image'>
              <img src={window.image1} />
            </picture>
            <picture className='full-image'>
              <img src={window.image2} />
            </picture>
            <picture className='half-image'>
              <img src={window.image3} />
            </picture>
            <picture className='half-image'>
              <img src={window.image4} />
            </picture>
            <picture className='full-image'>
              <img src={window.image5} />
            </picture>
            <picture className='half-image'>
              <img src={window.image6} />
            </picture>
            <picture className='half-image'>
              <img src={window.image7} />
            </picture>
            <picture className='full-image'>
              <img src={window.image8} />
            </picture>
            <picture className='half-image'>
              <img src={window.image9} />
            </picture>
            <picture className='half-image'>
              <img src={window.image10} />
            </picture>
            <picture className='full-image'>
              <img src={window.image11} />
            </picture>
            <picture className='half-image'>
              <img src={window.image12} />
            </picture>
            <picture className='half-image'>
              <img src={window.image2} />
            </picture>

          </picture>
          <main className='restaurant-info-container'>
            <h1 className='restaurant-show-name'>{restaurant.name}</h1>
            <div className="restaurant-show-info">
              <div className='restaurant-pc'>
                <strong>Cuisine - {restaurant.cuisine}</strong>
                &nbsp;&nbsp;
                <strong>Price - {restaurant.price}</strong>
              </div>
              Description - {restaurant.description}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;



// const restaurant = this.state.entities.restaurants[this.props.match.params.restaurantId];
