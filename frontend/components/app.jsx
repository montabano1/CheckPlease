import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import RestaurantHomeIndexContainer from './restaurants/restaurant_home_index_container';
import CuisineContainer from './restaurants/cuisines_container';
import RestaurantHomeSearchContainer from './restaurants/restaurant_home_search_container';
import RestaurantSearchIndexContainer from './restaurants/restaurant_search_index_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <span className='superheader'>
      <span className='super-word'>EN</span>
      <span className='super-word'>Help</span>
      <span className='super-word'>Mobile</span>
      <span className='super-word'>For Restaurateurs</span>
    </span>
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

    <Switch>
      <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route path="/restaurant/search" component={RestaurantSearchIndexContainer} />
    </Switch>
  </div>
);

export default App;
