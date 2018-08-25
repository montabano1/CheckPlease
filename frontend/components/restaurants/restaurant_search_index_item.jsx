import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { stars } from '../stars'
import { dollarsigns } from '../dollarsigns'

export function RestaurantSearchIndexItem ({restaurant, avas, showConfirmation}) {

  let picName = restaurant.name.split(' ').join('');

  const availabilities = avas.map((avail) => {
    if (avail.taken === 'true') {
      return <div className='search-index-empty' key={avail.id}/>
    } else {
    let hour = avail.hour;
    let pm = 'AM';
    if (avail.hour > 12) {
      hour -= 12;
      pm = 'PM';
    }
    let minute;
    if (avail.minute === 0) {
      minute = ':00 '
    } else {
      minute = ':30 '
    }
    const time = String(hour) + minute + pm
    const date = String(avail.year) + '-' + String(avail.month) + '-' + String(avail.day)

    const payload = {
      restaurant: restaurant,
      availid: avail.id,
      time: time,
      date: date
    }

    return (
      <div className='search-index-avail' key={avail.id}>
        <Link to='/reservation'>
          <button onClick={() => showConfirmation(payload)}>
          <span className='search-index-time'> {time} </span>
          </button>
        </Link>
      </div>
    );}
  });
  for(let i = 0; availabilities.length < 5; i++) {
    availabilities.push(
      <div className='search-index-empty' key={i}/>
    )
  }
  return (
    <section className='search-index-item'>
      <Link to={`/restaurants/${restaurant.id}`}>
        <section className='search-index-picture'>
          <img src={window[`${picName}`]} />
        </section>
      </Link>
      <div className='search-index-info'>
        <div className='search-index-row'>
          <Link to={`/restaurants/${restaurant.id}`}>
            <section className='search-index-name'>
              {restaurant.name}
            </section>
          </Link>
        </div>
        <div className='search-index-row'>
          <div className='restaurant-pc-rating'>
            <span className='search-index-rating'>
              Average rating - {Math.round(restaurant.average_rating*10)/10}
            </span>
            <span className='search-index-rating'>
              {stars[Math.round(restaurant.average_rating)]}
            </span>
          </div>
          <section className='search-index-price'>
            Price - {dollarsigns[restaurant.price]}
          </section>
        </div>
        <div className='search-index-row'>
          {restaurant.cuisine}
        </div>
        <div className='search-index-row'>
          Booked {restaurant.amount_booked} times today
        </div>
        <div className='search-index-avail-row'>
          {availabilities}
        </div>
      </div>
    </section>
  );
}
