import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: '',
      errors: '',
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
    const integers = [1, 2, 3, 4, 5]
    if (!this.props.currentUser) {
      this.setState({errors: 'You must be logged in to make a comment'})
    }
    else if (this.props.reviewerIds.includes(this.props.currentUser.id)) {
      this.setState({errors: 'You already entered a comment'})
    } else if (this.state.body.length === 0) {
      this.setState({errors: 'Please enter a comment'})
    } else if (integers.includes(this.state.rating)) {
    const restaurantId = parseInt(this.props.match.params.restaurantId);
    const review = Object.assign({}, this.state, {
      restaurant_id: restaurantId,
      body: this.state.body + ' - by ' + this.props.currentUser.username
    });
    this.props.createReview(review);
    this.setState({comment_entered: true})
    this.navigateToRestaurantShow();}
    else {
      this.setState({errors: 'Rating must be an integer between 1 and 5'})
    }
  }

  update(property) {
    if (property === 'rating') {
      return e => this.setState({ [property]: parseInt(e.currentTarget.value) });
    } else {
      return e => this.setState({ [property]: e.currentTarget.value });
    }
  }

  render() {
    return (
      <div className="review-form">
        <span className='review-form-title'> Write a review: </span>
        <form onSubmit={this.handleSubmit}>
          <label className='review-form-rating-title'>Rating (1-5):</label>
          <input
            type="number"
            value={parseInt(this.state.rating)}
            onChange={this.update("rating")}
            className='review-form-rating-value'
          />
          <br/>

          <label className='review-form-comment-title'>Comment:</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
            className='review-form-comment-body'
          />

          <input type="submit" className='review-form-submit'/>
          <br/>
          <span className='review-errors'>{this.state.errors}</span>

        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
