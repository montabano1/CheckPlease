import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import RestaurantHomeIndexContainer from './restaurants/restaurant_home_index_container';
import CuisineContainer from './restaurants/cuisines_container';
import RestaurantHomeSearchContainer from './restaurants/restaurant_home_search_container';
import RestaurantShowReservationContainer from './restaurants/restaurant_show_reservation_container';
import RestaurantSearchIndexContainer from './restaurants/restaurant_search_index_container';
import ReservationContainer from './restaurants/reservation_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal className='modal'/>
    <header>
      <Link to='/' >
        <h1 className='logo'>CheckPlease!</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={RestaurantHomeSearchContainer} />
    <Route exact path="/" component={RestaurantHomeIndexContainer} />
    <Route exact path="/" component={CuisineContainer} />
    <div className='restaurant-show-page'>
      <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route path="/reservation" component={ReservationContainer} />
    </div>
    <Route path="/restaurant/search" component={RestaurantSearchIndexContainer} />
  </div>
);

export default App;
