json.restaurant do
  json.extract! @restaurant, :name, :description, :location, :cuisine, :price, :menu_url
end