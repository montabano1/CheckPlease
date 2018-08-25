@avails.each do |ava|
  json.set! ava.id do
    json.extract! ava, :restaurant_id, :day, :month, :year, :hour, :minute, :taken, :id
  end
end
