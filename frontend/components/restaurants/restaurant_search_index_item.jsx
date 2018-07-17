import React from 'react';
import { connect } from 'react-redux';

export function RestaurantSearchIndexItem ({restaurant, avails}) {
  let picName = restaurant.name.split(' ').join('');
  return (
    <section className='search-index-item'>
      <section className='search-index-picture'>
        <img src={window[`${picName}`]} />
      </section>
      <section className='search-index-name'>
        {restaurant.name}
      </section>
      <section className='search-index-row'>
        RATING GOES HERE
      </section>
      <section className='search-index-row'>
        {restaurant.cuisine} - {restaurant.price} - Upper East Side
      </section>
      <section className='search-index-row'>
        BOOKED AMT GOES HERE
      </section>
    </section>
  );
}
