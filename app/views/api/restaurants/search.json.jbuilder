json.set! :restaurants do
  @restaurants.each do |res|
    json.set! res.id do
      json.extract! res, :name, :description, :location, :cuisine, :price, :menu_url, :id, :lat, :lng
      availIds = []
      res.avails.each do |ava|
        availIds.push(ava.id) if @avails.pluck(:id).include?(ava.id) && availIds.length < 5
      end

      json.availIds availIds
      json.average_rating res.average_rating
      json.reviewIds res.reviews.pluck(:id)
      json.amount_booked res.amount_booked
    end
  end
end

json.set! :avails do
  @avails.each do |ava|
    json.set! ava.id do
      json.extract! ava, :id, :restaurant_id, :datetime, :taken
    end
  end
end

json.searchppl @searchppl
