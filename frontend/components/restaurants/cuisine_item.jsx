import React from 'react';
import { connect } from 'react-redux';

export function CuisineItem (props) {
  return (
    <section className='cuisine-item'>
      <section className='cuisine-picture'>
      <img src={window.image2} />
      </section>
      <section className='cuisine-words'>
        Best {props.cuisine} Restaurants Around You
      </section>
    </section>

  )
}
