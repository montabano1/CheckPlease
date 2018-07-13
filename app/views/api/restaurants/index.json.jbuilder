@restaurants.each do |res|
  json.set! res.id do
    json.extract! res, :name, :description, :location, :cuisine, :price, :menu_url, :id, :lat, :lng
  end
end
