export const searchRestaurants = (search) => {
  return $.ajax ({
    method: 'GET',
    url: '/api/restaurant/search',
    data: {restaurant: search}
  });
};
