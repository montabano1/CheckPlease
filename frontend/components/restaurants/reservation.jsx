import React from 'react';
import { Link } from 'react-router-dom';
import { createRestaurant } from '../../actions/reservation_actions';

class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: props.currentUser.id,
      avail_id: props.availid
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReservation(this.state);
    this.props.updateAvail(this.state.avail_id).then(() => {
      this.props.history.push('/')
    });
  }

  render() {
    let picName = this.props.restaurant.name.split(' ').join('');
    return (
      <div className='reservation-show'>
        <div className='reservation-header'>
          <span> You're almost done! </span>
        </div>
        <div className='reservation-info' >
          <section className='reservation-picture'>
            <img src={window[`${picName}`]} />
          </section>
          <section className='reservation-guests'>
            <span>GUESTS</span>
            <span className='reservation-guests-value'>2 people</span>
          </section>
          <section className='reservation-date'>
            <span>DATE</span>
            <span className='reservation-date-value'>Wed, Jul 25, 2018</span>
          </section>
          <section className='reservation-time'>
            <span>TIME</span>
            <span className='reservation-time-value'>5:30 PM</span>
          </section>
          <section className='reservation-name'>
            <span>RESTAURANT</span>
            <span className='reservation-name-value'>Keens Steakhouse</span>
          </section>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className='reservation-submit' type='submit' value='Complete reservation'/>
        </form>
      </div>
    );
  }
}

export default Reservation;
