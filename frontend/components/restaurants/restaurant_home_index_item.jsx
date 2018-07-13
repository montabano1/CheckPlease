import React from 'react';
import { connect } from 'react-redux';

export function RestaurantHomeIndexItem ({restaurant}) {
  return (
    <section className='home-index-item'>
      <section className='home-index-picture'>
        <img src={window.image1} />
      </section>
      <section className='home-index-name'>
        {restaurant.name}
      </section>
      <section className='home-index-row'>
        RATING GOES HERE
      </section>
      <section className='home-index-row'>
        {restaurant.cuisine} - {restaurant.price} - Upper East Side
      </section>
      <section className='home-index-row'>
        BOOKED AMT GOES HERE
      </section>
    </section>

  )
}
