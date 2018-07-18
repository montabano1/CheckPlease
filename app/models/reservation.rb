class Reservation < ApplicationRecord

  validates :user_id, presence:true
  validates :avail_id, presence:true, uniqueness:true

  belongs_to :user
  belongs_to :avail

end
