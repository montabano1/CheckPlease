export const selectReviewsForRestaurant = ({ restaurants, reviews }, restaurant) => {
  if (restaurant) {
    return restaurant.reviewIds.map(reviewId => reviews[reviewId]);
  }
};
