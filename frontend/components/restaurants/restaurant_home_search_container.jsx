import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { RestaurantHomeIndexItem } from './restaurant_home_index_item';

export class RestaurantHomeSearchContainer extends React.Component {

  render() {
    return (
      <form className='home-search-container'>
        <section className='home-search-container-heading'>Find your table for any occasion</section>
        <section className='home-search-dropdown-left'>
          <input type="date" name="bday"/>
        </ section >
        <select className='home-search-dropdown-center custom-select' defaultValue='19:00'>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="12:30">12:30 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="13:30">1:30 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="14:30">2:30 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="15:30">3:30 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="16:30">4:30 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="17:30">5:30 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="18:30">6:30 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="19:30">7:30 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="20:30">8:30 PM</option>
          <option value="21:00">9:00 PM</option>
          <option value="21:30">9:30 PM</option>
          <option value="22:00">10:00 PM</option>
          <option value="22:00">10:30 PM</option>
          <option value="23:00">11:00 PM</option>
          <option value="23:30">11:30 PM</option>
        </ select >
        <select className='home-search-dropdown-right'> 2 people
          <option value='1'> 1 person</option>
          <option value='2' selected> 2 people</option>
          <option value='3'> 3 people</option>
          <option value='4'> 4 people</option>
          <option value='5'> 5 people</option>
          <option value='6'> 6 people</option>
          <option value='7'> 7 people</option>
          <option value='8'> 8 people</option>
          <option value='9'> 9 people</option>
        </ select >
        <input
          type='text'
          className='home-search-input'
          placeholder='Location, Restaurant or Cuisine'/>
        <button className='home-search-submit'> Let's go </ button >
      </form>
    );
  }

}
