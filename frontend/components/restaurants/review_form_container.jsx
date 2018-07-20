import { connect } from 'react-redux';
import { createReview } from '../../actions/restaurant_actions.js';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  const reviewerIds = Object.values(state.entities.reviews).map( rev => {
    if (ownProps.restaurantId === rev.restaurant_id) {
      return rev.author_id
    }
  });
  return {
  currentUser: state.entities.users[state.session.id],
  reviewerIds
}};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
