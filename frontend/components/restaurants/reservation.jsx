import React from 'react';
import { Link } from 'react-router-dom';
import { createRestaurant } from '../../actions/reservation_actions';

class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: props.currentUser.id,
      restaurant_id: parseInt(props.restaurantId)
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.createReservation(state).then(() => {
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <div>
        <div className='reservation-header'>
          <span> You're almost done! </span>
        </div>
        <div className='reservation-info' />
        <form onSubmit={this.handleSubmit} className='login-form'>
          <input type='submit' value='Make Reservation!'/>
        </form>
      </div>
    );
  }
}

export default Reservation;
