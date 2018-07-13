# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Restaurant.delete_all

monte = User.create({username: 'monte', email: 'monte@monte.com', password: 'password'})

mcdowells = Restaurant.create({
  name: 'McDowells',
  description: 'golden arcs',
  location: '8507 queens blvd, Elmhurst, NY 11373',
  cuisine: 'Fast food',
  price: 1,
  menu_url: 'menus.com/1'
})

burger_quen = Restaurant.create({
  name: 'Burger Quen',
  description: 'let them eat burgers',
  location: '8504 queens blvd, Elmhurst, NY 11373',
  cuisine: 'Fast food',
  price: 1,
  menu_url: 'menus.com/2'
})
peter_boogers = Restaurant.create({
  name: 'Peter Boogers',
  description: 'try our steak snoz',
  location: '21 broad st, Brooklyn, NY 10708',
  cuisine: 'Steakhouse',
  price: 3,
  menu_url: 'menus.com/3'
})
orangebees = Restaurant.create({
  name: 'Orangebees',
  description: 'Orange ya glad we arent applebees',
  location: '8504 queens blvd, Elmhurst, NY 11373',
  cuisine: 'American',
  price: 1,
  menu_url: 'menus.com/4'
})
sushi_mikes = Restaurant.create({
  name: 'Sushi Mikes',
  description: 'sushini',
  location: '8504 queens blvd, Elmhurst, NY 11373',
  cuisine: 'Sushi',
  price: 2,
  menu_url: 'menus.com/5'
})
