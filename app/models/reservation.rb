class Reservation < ApplicationRecord

  validates :user_id, :avail_id, presence:true

  belongs_to :user
  belongs_to :avail

end
