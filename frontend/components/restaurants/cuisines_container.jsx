import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CuisineItem } from './cuisine_item'
import { fetchRestaurants } from '../../actions/restaurant_actions'

const cuisines = [
  'American',
  'Italian',
  'Steakhouse',
  'French',
  'Seafood',
  'Mediterranean',
  'Japanese',
  'Contemporary American',
  'Indian',
  'Greek',
  'Pizzeria',
  'Sushi',
  'Asian',
  'Mexican',
  'Farm-to-table',
  'Chinese'
]

class CuisineContainer extends React.Component {

  render() {
    const cuzines = cuisines.map((cuz, idx) => {
      return (
        <Link to={`/`} key={idx}>
          <CuisineItem cuisine={cuz} key={idx} />
        </Link>
      );
    });


    return (
      <main >
        <section className='cuisine-container-heading'>
          Top cuisines near Manhattan:
        </section>
        <ul className='cuisine-list'>{cuzines}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(CuisineContainer);
