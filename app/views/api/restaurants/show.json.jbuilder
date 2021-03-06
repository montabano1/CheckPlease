json.restaurant do
  json.extract! @restaurant, :name, :description, :location, :cuisine, :price, :menu_url, :id, :lat, :lng
  json.availIds @restaurant.avails.pluck(:id)
  json.reviewIds @restaurant.reviews.pluck(:id)
  json.average_rating @restaurant.average_rating
  json.amount_booked @restaurant.amount_booked
end

@restaurant.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :username
    end
  end
end
