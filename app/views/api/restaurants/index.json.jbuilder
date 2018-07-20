json.restaurants do
  @restaurants.each do |res|
  json.set! res.id do
    json.extract! res, :name, :description, :location, :cuisine, :price, :menu_url, :id, :lat, :lng
    json.average_rating res.average_rating
    json.reviewIds []
    json.amount_booked res.amount_booked
    end
  end
end
