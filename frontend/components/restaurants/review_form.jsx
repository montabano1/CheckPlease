import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRestaurantShow = this.navigateToRestaurantShow.bind(this);
  }

  navigateToRestaurantShow() {
    const url = `/restaurants/${this.props.match.params.restaurantId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const restaurantId = parseInt(this.props.match.params.restaurantId);
    const review = Object.assign({}, this.state, {
      restaurant_id: restaurantId
    });
    this.props.createReview(review);
    this.navigateToRestaurantShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToRestaurantShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
