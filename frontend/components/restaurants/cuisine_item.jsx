import React from 'react';
import { connect } from 'react-redux';

export function CuisineItem (props) {
  return (
    <section onClick={() => props.searchRestaurants(props.cuisineName)} className='cuisine-item'>
      <section className='cuisine-picture'>
      <img src={window[`cuisine${props.cuisinePic}`]} />
      </section>
      <section className='cuisine-words'>
        Best {props.cuisineName} Restaurants Around You
      </section>
    </section>

  )
}
