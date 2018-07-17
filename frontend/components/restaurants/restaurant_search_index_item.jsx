import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export function RestaurantSearchIndexItem ({restaurant, avails, avas}) {
  let picName = restaurant.name.split(' ').join('');
  const availabilities = avas.map((avail) => {
    if (avail.taken === 'true') {
      return <div className='search-index-empty' key={avail.id}/>
    } else {
    let time;
    if (avail.datetime[11] === '0') {
      time = avail.datetime.slice(12,16);
    } else {
      time = avail.datetime.slice(11,16);
    }

    return (
      <div className='search-index-avail' key={avail.id}>
        <Link to={`/reservation/${restaurant.id}?${time}`} key={avail.id}>
          <span className='search-index-time' key={avail.id}>{time}</span>
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
      <section className='search-index-picture'>
        <img src={window[`${picName}`]} />
      </section>
      <div className='search-index-info'>
        <div className='search-index-row'>
          <section className='search-index-name'>
            {restaurant.name}
          </section>
        </div>
        <div className='search-index-row'>
          <section className='search-index-rating'>
            RATING GOES HERE
          </section>
          <section className='search-index-price'>
            {restaurant.price}
          </section>
        </div>
        <div className='search-index-row'>
          {restaurant.cuisine}
        </div>
        <div className='search-index-row'>
          BOOKED AMT GOES HERE
        </div>
        <div className='search-index-avail-row'>
          {availabilities}
        </div>
      </div>
    </section>
  );
}
