import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export function RestaurantSearchIndexItem ({restaurant, avas, showConfirmation}) {

  let picName = restaurant.name.split(' ').join('');

  const availabilities = avas.map((avail) => {
    if (avail.taken === 'true') {
      return <div className='search-index-empty' key={avail.id}/>
    } else {
    let time;
    debugger
    if (avail.datetime[11] === '0') {
      time = avail.datetime.slice(12,16) + ' AM';
    } else if (parseInt(avail.datetime.slice(11,13)) > 12) {
      let temp = ((parseInt(avail.datetime.slice(11,13))+88).toString());
      time = temp.slice(1) + avail.datetime.slice(13,16) + ' PM';
      if (time[0] === '0') {
        time = time.slice(1);
      }
    } else {
      time = avail.datetime.slice(11,16) + ' AM';
    }

    const payload = {
      restaurant: restaurant,
      availid: avail.id,
      time: time,
      date: avail.datetime.slice(0,10)
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
