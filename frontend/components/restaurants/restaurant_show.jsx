import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRestaurant } from './restaurant_show_container';
import RestaurantMap from './restaurant_map';

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
              <img src={window.image1} />
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
                <section className='restaurant-description'>
                  Description - {restaurant.description}
                </section>
                <div className='restaurant-specifics'>
                  <section className='specifics'>
                    <span className='specifics-title'> Private Dining </span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Dining Style </span>
                    <span className='specifics-description'>Casual Elegant</span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Cuisine </span>
                    <span className='specifics-description'>{restaurant.cuisine}</span>
                  </section>
                  <section className='specifics-hours'>
                    <span className='specifics-title'> Hours of operation </span>
                      <span className='specifics-description'>
                        Dinner: Monday - Wednesday 5:30pm - 10:30pm, Thursday 5:30pm - 11:00pm, Friday - Saturday 5:30pm - 11:30pm, Sunday 5:30pm - 10:00pm,
                        Lunch Monday - Friday 12:00pm - 3:00pm;
                        Brunch Saturday -Sunday 11:00am - 3pm
                      </span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Phone number </span>
                    <span className='specifics-description'>(555) 475-5829</span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Website </span>
                    <span className='specifics-description'>{restaurant.menu_url}</span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Payment options </span>
                    <span className='specifics-description'>AMEX, Discover, Mastercard, Visa</span>
                  </section>
                  <section className='specifics'>
                    <span className='specifics-title'> Dress code </span>
                    <span className='specifics-description'>Casual Dress</span>
                  </section>
                  <section className='map'>
                    <RestaurantMap lat={restaurant.lat} lng={restaurant.lng}/>
                  </section>

                  <section className='specifics-address'>{restaurant.location}</section>
                    <section className='specifics2'>
                      <span className='specifics-title'> Neighborhood </span>
                      <span className='specifics-description'>Gramercy/ Flatiron</span>
                    </section>
                    <section className='specifics2'>
                      <span className='specifics-title'> Cross street </span>
                      <span className='specifics-description'>Broadway & Park Avenue South</span>
                    </section>
                    <section className='specifics2'>
                      <span className='specifics-title'> Parking details </span>
                      <span className='specifics-description'>No Parking</span>
                    </section>
                    <section className='specifics2'>
                      <span className='specifics-title'> Public transit </span>
                      <span className='specifics-description'>L,N,Q,R,W,4,5,6 to Union Square</span>
                    </section>
                    <section className='specifics2'>
                      <span className='specifics-title'> Additional </span>
                      <span className='specifics-description'>Bar Dining, Bar/Lounge, Beer</span>
                    </section>

                </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;



// const restaurant = this.state.entities.restaurants[this.props.match.params.restaurantId];
