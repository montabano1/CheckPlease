import React from 'react';
import { connect } from 'react-redux';
import { stars } from '../stars';
import { dollarsigns } from '../dollarsigns'

export function RestaurantHomeIndexItem ({restaurant}) {
  let picName = restaurant.name.split(' ').join('');

  return (
    <section className='home-index-item'>
      <section className='home-index-picture'>
        <img src={window[`${picName}`]} />
      </section>
      <section className='home-index-name'>
        {restaurant.name}
      </section>
      <section className='home-index-row'>
        Average rating - {Math.round(restaurant.average_rating*10)/10}
        <br/>
        {stars[Math.round(restaurant.average_rating)]}
      </section>
      <section className='home-index-row-cp'>
        <span>{restaurant.cuisine.split(' ')[0]}</span>
        <span>Price - {dollarsigns[restaurant.price]}</span>
      </section>
      <section className='home-index-row'>
        Booked {restaurant.amount_booked} times today
      </section>
    </section>
  );
}
