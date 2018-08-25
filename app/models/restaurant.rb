require 'avail'

class Restaurant < ApplicationRecord

  CUISINES = [
    'American',
    'Italian',
    'Steakhouse',
    'French',
    'Seafood',
    'Mediterranean',
    'Japanese',
    'Contemporary',
    'Indian',
    'Greek',
    'Pizzeria',
    'Sushi',
    'Asian',
    'Mexican',
    'Farm-to-table',
    'Chinese'
  ]

  validates :name, :price, :location, presence: true

  has_many :avails
  has_many :reviews
  has_many :reservations, through: :avails, source: :reservation

  def self.search_true(sc)
    if sc.length == 0
      self.all
    else
      self.where(cuisine: sc).or(self.where(name: sc))
    end
  end

  def self.avail_date(id, day, time)
    Avail.where(restaurant_id: id).where(year: day[0..3].to_i).where(month: day[5..6])
    .where(day: day[8..9]).where('hour > ?', time.split(' ')[0].to_i - 1)
  end

  def average_rating
    reviews.average(:rating)
  end

  def amount_booked
    reservations.count
  end
end
