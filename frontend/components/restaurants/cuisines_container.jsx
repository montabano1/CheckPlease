import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CuisineItem } from './cuisine_item';
import { fetchRestaurants, searchRestaurants } from '../../actions/restaurant_actions';

const cuisines = [
  'American',
  'Italian',
  'Steakhouse',
  'French',
  'Seafood',
  'Mediterranean',
  'Japanese',
  'Contemporary',
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
  constructor(props) {
    super(props);
    this.searchRestaurants = this.searchRestaurants.bind(this);
  }

  searchRestaurants(cuz) {
    const today = new Date();
    console.log('hello from searchRestaurants');
    return this.props.searchRestaurants({
      searchdate: `${today.getFullYear()}-${(today.getMonth() + 101).toString().slice(1)}-${today.getDate()}`,
      searchtime: '19:00',
      searchppl: '2 people',
      searchcuisine: cuz
    }).then(() => this.props.history.push('/restaurant/search'));
  }

  render() {
    const cuzines = cuisines.map((cuz, idx) => {
      switch (cuz) {
        case 'Farm-to-table':
          return <CuisineItem cuisineName={cuz} cuisinePic={'FarmToTable'} key={idx} searchRestaurants={this.searchRestaurants} />
        default:
          return <CuisineItem cuisineName={cuz} cuisinePic={cuz} key={idx} searchRestaurants={this.searchRestaurants} />;
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

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: search => dispatch(searchRestaurants(search)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CuisineContainer);
