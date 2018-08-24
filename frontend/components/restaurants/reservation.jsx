import React from 'react';
import { Link } from 'react-router-dom';
import { createRestaurant } from '../../actions/reservation_actions';

class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: props.currentUser.id,
      avail_id: props.availid,
      errors: '',
      complete: false
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.session.id) {
      this.props.createReservation(this.state);
      this.props.updateAvail(this.state.avail_id).then(() => {
        this.setState({complete: true})
      });
    } else {
      this.setState({errors: 'YOU MUST BE LOGGED IN TO MAKE A RESERVATION'});
    }
  }

  render() {
    
    const picName = this.props.restaurant.name.split(' ').join('');
    const date = this.props.date;
    const datestring = new Date(parseInt(date.slice(0,4)),parseInt(date.slice(5,7))-1, parseInt(date.slice(8,10))).toDateString()
    const confirm = (
      this.state.complete ?
        (<div>
          <span className='successConfirmation'> Your reservation has been confirmed </span>
          <Link to='/' className='backhome'> Back to HOME </Link>
        </div>)
        :
        (<div>
          <form onSubmit={this.handleSubmit}>
            <input className='reservation-submit' type='submit' value='Complete reservation'/>
          </form>
          <span className='confirmation-errors'> {this.state.errors} </span>
        </div>));


    return (
      <div className='reservation-show'>
        <div className='reservation-header'>
          <span> You're almost done! </span>
          <span className='dont-refresh'> Please DO NOT refresh this page </span>
        </div>
        <div className='reservation-info' >
          <section className='reservation-picture'>
            <img src={window[`${picName}`]} />
          </section>
          <section className='reservation-guests'>
            <span>GUESTS</span>
            <span className='reservation-guests-value'>{this.props.searchppl}</span>
          </section>
          <section className='reservation-date'>
            <span>DATE</span>
            <span className='reservation-date-value'>{datestring}</span>
          </section>
          <section className='reservation-time'>
            <span>TIME</span>
            <span className='reservation-time-value'>{this.props.time}</span>
          </section>
          <section className='reservation-name'>
            <span>RESTAURANT</span>
            <span className='reservation-name-value'>{this.props.restaurant.name}</span>
          </section>
        </div>
        <div className='confirm-container'>
          {confirm}
        </div>
      </div>
    );
  }
}

export default Reservation;
