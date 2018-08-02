import React from 'react';

class RestaurantHomeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const today = new Date();
    this.state = {
      searchdate: `${today.getFullYear()}-${(today.getMonth() + 101).toString().slice(1)}-${(today.getDate() + 101).toString().slice(1)}`,
      searchtime: '19:00',
      searchppl: '2 people',
      searchcuisine:''
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
    this.props.searchRestaurants(this.state).then(() => {
      this.props.history.push('/restaurant/search');
      this.props.closeModal();
    });
  }

  render() {
    return (
      <form className='home-search-container' onSubmit={this.handleSubmit}>
        <section className='home-search-container-heading'>Find your table for any occasion</section>
        <section className='home-search-dropdown-left'>
          <input
            type="date"
            value={this.state.searchdate}
            onChange={this.update('searchdate')}
            />
        </ section >
        <select className='home-search-dropdown-center'
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
        <select className='home-search-dropdown-right'
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
        <input
          type='text'
          className='home-search-input'
          placeholder='Location, Restaurant or Cuisine'
          value = {this.state.searchcuisine}
          onChange={this.update('searchcuisine')}/>
        <input type='submit' className='home-search-submit' value='Lets go!'/>
      </form>
    );
  }
}

export default RestaurantHomeSearch;
