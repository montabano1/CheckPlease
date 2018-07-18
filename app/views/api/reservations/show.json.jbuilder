json.reservation do
  json.extract! @reservation, :id, :avail_id, :user_id
end
