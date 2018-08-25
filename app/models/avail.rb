class Avail < ApplicationRecord

  validates :restaurant_id, :day, :month, :year, :hour, :minute, :taken, presence: true

  belongs_to :restaurant
  has_one :reservation

end
