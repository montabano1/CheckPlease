json.user do
  json.extract! @user, :id, :username, :email
  json.reservationIds @user.reservations.pluck(:id)
end 
