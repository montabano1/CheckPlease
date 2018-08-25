import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantShowReservation extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const today = new Date();

    this.state = {
      searchdate: `${today.getFullYear()}-${(today.getMonth() + 101).toString().slice(1)}-${(today.getDate() + 101).toString().slice(1)}`,
      searchtime: '19:00',
      searchppl: '2 people',
      searchcuisine: props.restaurant.name,
      searched: false
    };
  }


  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.openModal('loading');
    this.props.searchRestaurants({
      searchdate: this.state.searchdate,
      searchtime: this.state.searchtime,
      searchppl: this.state.searchppl,
      searchcuisine: this.props.restaurant.name
    }).then(() => {
      this.setState({searched: true});
      this.props.closeModal();
    });
  }

  render() {
    let choices;
    let help = false;
    let availabilities;
    if (this.state.searched === false) {
      choices = [];
    } else {
      choices = this.props.restaurant.availIds.sort() || [];
      availabilities = choices.map((avail) => {
        let ava = this.props.avails[avail]
        if (ava.taken === 'true') {
          return <div key={ava.id}/>
        } else {
        let hour;
        let minute;
        let pm = 'AM'
        if (ava.hour >12) {
          hour = ava.hour - 12;
          pm = 'PM'
        }
        if (ava.minute === 0) {
          minute = ':00 '
        } else {
          minute = ':30 '
        }
        const time = String(hour) + minute + pm;
        const payload = {
          restaurant: this.props.restaurant,
          availid: ava.id,
          time: time,
          date: String(ava.year) + '-' + String(ava.month) + '-' + String(ava.day)
        }

        return (
          <div className='search-index-avail-show' key={ava.id}>
            <Link to='/reservation'>
              <button onClick={() => this.props.showConfirmation(payload)}>
              <span className='search-index-time'> {time} </span>
              </button>
            </Link>
          </div>
        );}
      });
    }
    return (
      <div className='restaurant-show-reservation-container'>
        <form className='reservation-form-container' onSubmit={this.handleSubmit}>
          <section className='reservation-form-container-heading'>Make a reservation</section>
          <label className='reservation-party-title'>
            <span className='reservation-form-title-content'>
              Party Size
            </span>
            <select className='reservation-party-dropdown'
            value={this.state.searchppl}
            onChange={this.update('searchppl')}>
              <option value='1 person'> 1 person</option>
              <option value='2 people'> 2 people</option>
              <option value='3 people'> 3 people</option>
              <option value='4 people'> 4 people</option>
              <option value='5 people'> 5 people</option>
              <option value='6 people'> 6 people</option>
              <option value='7 people'> 7 people</option>
              <option value='8 people'> 8 people</option>
              <option value='9 people'> 9 people</option>
            </ select >
          </label>
          <label className='reservation-title'>
            <span className='reservation-form-title-content'>
              Date
            </span>
            <section className='reservation-date-dropdown'>
              <input
              type="date"
              value={this.state.searchdate}
              onChange={this.update('searchdate')}
              />
            </section>
          </label>
          <label className='reservation-title'>
            <span className='reservation-form-title-content'>
              Time
            </span>
            <select className='reservation-time-dropdown'
              value={this.state.searchtime}
              onChange={this.update('searchtime')}>
              <option className= 'time-option' value="10:30">10:30 AM</option>
              <option className= 'time-option' value="11:00">11:00 AM</option>
              <option className= 'time-option' value="11:30">11:30 AM</option>
              <option className= 'time-option' value="12:00">12:00 PM</option>
              <option className= 'time-option' value="12:30">12:30 PM</option>
              <option className= 'time-option' value="13:00">1:00 PM</option>
              <option className= 'time-option' value="13:30">1:30 PM</option>
              <option className= 'time-option' value="14:00">2:00 PM</option>
              <option className= 'time-option' value="14:30">2:30 PM</option>
              <option className= 'time-option' value="15:00">3:00 PM</option>
              <option className= 'time-option' value="15:30">3:30 PM</option>
              <option className= 'time-option' value="16:00">4:00 PM</option>
              <option className= 'time-option' value="16:30">4:30 PM</option>
              <option className= 'time-option' value="17:00">5:00 PM</option>
              <option className= 'time-option' value="17:30">5:30 PM</option>
              <option className= 'time-option' value="18:00">6:00 PM</option>
              <option className= 'time-option' value="18:30">6:30 PM</option>
              <option className= 'time-option' value="19:00">7:00 PM</option>
              <option className= 'time-option' value="19:30">7:30 PM</option>
              <option className= 'time-option' value="20:00">8:00 PM</option>
              <option className= 'time-option' value="20:30">8:30 PM</option>
              <option className= 'time-option' value="21:00">9:00 PM</option>
              <option className= 'time-option' value="21:30">9:30 PM</option>
              <option className= 'time-option' value="22:00">10:00 PM</option>
              <option className= 'time-option' value="22:00">10:30 PM</option>
              <option className= 'time-option' value="23:00">11:00 PM</option>
              <option className= 'time-option' value="23:30">11:30 PM</option>
            </ select >
          </label>
          <input type='submit' className='reservation-form-submit' value='Find a Table' />
          <div className='availabilities'>
            {availabilities}
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantShowReservation;
