class Restaurant < ApplicationRecord

  CUISINES = [
    'American',
    'Italian',
    'Steakhouse',
    'French',
    'Seafood',
    'Mediterranean',
    'Japanese',
    'Contemporary American',
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

end
