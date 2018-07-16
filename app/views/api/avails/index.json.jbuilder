@avails.each do |ava|
  json.set! ava.id do
    json.extract! ava, :restaurant_id, :datetime, :taken, :id
  end 
end
