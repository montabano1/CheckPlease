import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CuisineItem } from './cuisine_item';
import { fetchRestaurants } from '../../actions/restaurant_actions';

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
];

class CuisineContainer extends React.Component {

  render() {
    const cuzines = cuisines.map((cuz, idx) => {
      switch (cuz) {
        case 'Contemporary American':
          return (
            <Link to={`/`} key={idx}>
              <CuisineItem cuisineName={cuz} cuisinePic={'Contemporary'} key={idx} />
            </Link>
          );
        case 'Farm-to-table':
          return (
            <Link to={`/`} key={idx}>
              <CuisineItem cuisineName={cuz} cuisinePic={'FarmToTable'} key={idx} />
            </Link>
          );
        default:
          return (
            <Link to={`/`} key={idx}>
              <CuisineItem cuisineName={cuz} cuisinePic={cuz} key={idx} />
            </Link>
          );
      }
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
  return {
    currentuser: state.entities.users[state.session.id] || {username: ''}
  };
};


export default connect(mapStateToProps, null)(CuisineContainer);
