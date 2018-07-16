json.restaurants do
  @restaurants.each do |res|
    json.set! res.id do
      json.extract! res, :name, :description, :location, :cuisine, :price, :menu_url, :id, :lat, :lng
      availIds = []
      res.avails.each do |ava|
        availIds.push(ava.id) if @avails.pluck(:id).include?(ava.id)
      end
      json.availIds availIds
    end
  end
end

json.avails do
  @avails.each do |ava|
    json.set! ava.id do
      json.extract! ava, :id, :restaurant_id, :datetime, :taken
    end
  end
end
