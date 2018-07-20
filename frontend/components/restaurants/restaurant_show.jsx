import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRestaurant } from './restaurant_show_container';
import RestaurantMap from './restaurant_map';
import RestaurantShowReservationContainer from './restaurant_show_reservation_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import ReviewListItemContainer from './review_list_item_container';
import ReviewFormContainer from './review_form_container';
import { stars } from '../stars'
import { dollarsigns } from '../dollarsigns'



class RestaurantShow extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    window.scrollTo(0, 0)
  }


  render() {
    const restaurant = this.props.restaurant;
    if (!restaurant) {
      return <div>Loading...</div>;
    }
    const reviewList = (reviews) => {
      if (!reviews.includes(undefined)) {
        return (reviews.map(review => (
          <ReviewListItemContainer
            review={review}
            key={review.id}
          />
        )))
      }
    };
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
            <div className='restaurant-info-container-content'>
              <h1 className='restaurant-show-name'>{restaurant.name}</h1>
              <div className="restaurant-show-info">
                <div className='restaurant-pc'>
                  <div className='restaurant-pc-rating'>
                    <span className='restaurant-show-rating'>{stars[Math.round(restaurant.average_rating)]} </span>
                    <span> {Math.round(restaurant.average_rating*10)/10}</span>
                  </div>
                  <span className='restaurant-show-cuisine'>Cuisine - {restaurant.cuisine}</span>
                  <span className='restaurant-show-cuisine'>Price - {dollarsigns[restaurant.price]}</span>
                </div>
                  <section className='restaurant-description'>
                    <span className='restaurant-description-value'>
                      {restaurant.description}
                    </span>
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

                    <section className='map'>
                      <RestaurantMap restaurant={restaurant} fetchRestaurant={fetchRestaurant} lat={restaurant.lat} lng={restaurant.lng}/>
                    </section>

                    <section className='specifics-address'>{restaurant.location}</section>

                      <section className='specifics2'>
                        <span className='specifics-title'> Address </span>
                        <span className='specifics-description'>{restaurant.location}</span>
                      </section>
                      <section className='specifics2'>
                        <span className='specifics-title'> Dress code </span>
                        <span className='specifics-description'>Casual Dress</span>
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
                      <RestaurantShowReservationContainer restaurant={restaurant} />
                  </div>
              </div>
            </div>
            <div className="restaurant-review">
              <div className="reviews">
                <ReviewFormContainer restaurantId={restaurant.id}/>
                <h3>Reviews</h3>
                {reviewList(this.props.reviews)}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
