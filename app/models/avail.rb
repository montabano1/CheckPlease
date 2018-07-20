class Avail < ApplicationRecord

  validates :restaurant_id, :datetime, :taken, presence: true

  belongs_to :restaurant
  has_one :reservation

end
