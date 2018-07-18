# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Restaurant.delete_all
Avail.delete_all
Reservation.delete_all

monte = User.create({username: 'monte', email: 'monte@monte.com', password: 'password'})

mcdowells = Restaurant.create({
  name: 'McDowells',
  description: 'golden arcs',
  location: '8507 queens blvd, Elmhurst, NY 11373',
  cuisine: 'Fast food',
  price: 1,
  menu_url: 'mcdowells.com/menu',
  lat: 40.737302,
  lng: -73.878663
})

burger_queen = Restaurant.create({
  name: 'Burger Queen',
  description: 'let them eat burgers',
  location: '8504 queens blvd, Elmhurst, NY 11373',
  cuisine: 'Fast food',
  price: 1,
  menu_url: 'BurgerQueen.com/menu',
  lat: 40.736891,
  lng: -73.879527
})
peter_boogers = Restaurant.create({
  name: 'Peter Boogers',
  description: 'try our steak snoz',
  location: '21 broad st, Brooklyn, NY 10708',
  cuisine: 'Steakhouse',
  price: 3,
  menu_url: 'PeterBoogers.com/menu',
  lat: 40.710185,
  lng: -73.964259
})
orangebees = Restaurant.create({
  name: 'Orangebees',
  description: 'Orange ya glad we arent applebees',
  location: '319 W 42nd St # 1, New York, NY 10036',
  cuisine: 'American',
  price: 1,
  menu_url: 'Orangebees.com/menu',
  lat: 40.757583,
  lng: -73.991110
})
sushi_mikes = Restaurant.create({
  name: 'Sushi Mikes',
  description: 'sushini',
  location: '1188 Gravesend Neck Rd, Brooklyn, NY 11229',
  cuisine: 'Sushi',
  price: 2,
  menu_url: 'SushiMikes.com/menu',
  lat: 40.595165,
  lng: -73.958413
})
sushi_daves = Restaurant.create({
  name: 'Sushi Daves',
  description: 'sushini too!',
  location: '1186 Gravesend Neck Rd, Brooklyn, NY 11229',
  cuisine: 'Sushi',
  price: 2,
  menu_url: 'SushiDaves.com/menu',
  lat: 40.595165,
  lng: -73.96
})

dorsias = Restaurant.create({
  name: 'Dorsias',
  description: 'The menu includes: Squid ravioli and lemongrass broth; Goat Cheese Profiteroles; “Arugula Caesar;” Peanut Butter Soup, Smoked duck, Mashed Squash; Sea Urchin Ceviche; Cilantro Crawfish Gumbo; Hanger Steak, Béarnaise, Potato Pave; and Chocolate Parfait. All that for a very reasonable $75',
  location: '60 E 54th St New York, NY 10022',
  cuisine: 'Italian',
  price: 4,
  menu_url: 'dorsias.com/menu',
  lat: 40.759890,
  lng: -73.973209
})

pollos = Restaurant.create({
  name: 'Los Pollos Hermanos',
  description: 'Try our special! Cooked by Heisenberg himself',
  location: '32 W 22nd St, New York, NY 10010',
  cuisine: 'Mexican',
  price: 1,
  menu_url: 'LosPollosHermanos.com/menu',
  lat: 40.741695,
  lng: -73.991956
})

gusteaus = Restaurant.create({
  name: 'Gusteaus',
  description: "Parisian favorite Gusteaus’ now has a home in New York City. Come see  head chef Remy the Rat is serve elegant French cuisine. If Remy's signature dish, ratatouille, is good enough to woo restaurant critic Anton Ego's selective tastebuds, we're sure it will pass the test on our slightly-less discerning palates." ,
  location: '60 E 65th St, New York, NY 10065',
  cuisine: 'French',
  price: 4,
  menu_url: 'Gusteaus.com/menu',
  lat: 40.766766,
  lng: -73.967621
})

merlottes = Restaurant.create({
  name: 'Merlottes',
  description: "Merlotte's Bar and Grill, has all the comforts needed of down-home Southern cuisine. Currently under the ownership of Arlene Fowler. Try the Sookie Stackhouse Shortstack of pancakes or the Bloody Mary Soup with a side of sausage. Just be careful to leave before dark.",
  location: '328 Shifter St, Sulphur, LA 70665',
  cuisine: 'American',
  menu_url: 'Merlottes.com/menu',
  price: 1,
  lat: 30.230538,
  lng: -93.355222
})

nuovo = Restaurant.create({
  name: "Nuovo Vesuvio",
  description: "This old school Italian restaurant is truly a hit, a mob hit! Get down with Chef Artie Bucco’s chicken parmigiana or some pasta fazool. But remember What happens at Vesuvios, stays at Vesuvios—right, Artie?",
  cuisine: 'Italian',
  location:  '7305 3rd Ave, Brooklyn, NY 11209',
  menu_url: 'NuovoVesuvio.com/menu',
  price: 3,
  lat: 40.632580,
  lng: -74.027096,
})


maclarens = Restaurant.create({
  name: 'MacLarens Pub',
  description: "McLaren's is a typical Irish pub with familiar patrons who frequent the booth near the bar and order fried appetizers (from 11 different options, no less) over shots and pints. The burgers are pretty good: one patron was overheard saying, “It's like Christmas in my mouth—meat Christmas",
  cuisine: 'Contemporary',
  location: '240 w 55th st new york ny 10019',
  menu_url: 'Maclarens.com/menu',
  price: 1,
  lat: 40.764959,
  lng: -73.982874
})

Restaurant.all.each do |res|
  i = 0
  day = Time.now.day
  month = Time.now.month
  while i < 7
    hour = 11
    while hour < 24
      Avail.create({
        restaurant_id: res.id,
        datetime: DateTime.new(2018, month, day, hour, 0),
        taken: 'false'
        })
      Avail.create({
        restaurant_id: res.id,
        datetime: DateTime.new(2018, month, day, hour, 30),
        taken: 'false'
        })
      hour += 1
    end
    day += 1
    if day > 30
      day = 1
      month += 1
    end
    i += 1
  end
end
