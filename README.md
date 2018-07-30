# README

# Welcome to CheckPlease!

My app is a clone of OpenTable.com. Its purpose is to search for restaurants
by either cuisine or availability time, and make a reservation of that time.
Each restaurant has its own show page with restaurant details, ratings and
comments.

## Live site:

https://check-please1.herokuapp.com/#/

# Searching restaurants/ availabilities

The home page is where you can search for restaurants.

![alt text](https://i.imgur.com/r3KuUqP.png "Home search")

You can either use the search form which is a controlled component or you can click on one of
the cuisine items which are listed in a scrolling box. The biggest challenge
for me on this was getting the search to work correctly, which was done in the
back end by adding a search function to my restaurants controller, and a few
selectors using if statements:

```
def search
  @avails = []
  @restaurants = []
  Avail.all.each do |ava|
    if (restaurant_params[:searchdate][-2..-1].to_i== ava.datetime.day &&
      restaurant_params[:searchdate][-5..-4].to_i == ava.datetime.month &&
      restaurant_params[:searchtime][0..1].to_i <= ava.datetime.hour &&

      (Restaurant.find(ava.restaurant_id).cuisine.downcase.include?(restaurant_params[:searchcuisine].downcase) ||
      Restaurant.find(ava.restaurant_id).name.downcase.include?(restaurant_params[:searchcuisine].downcase)))
      @searchppl = restaurant_params[:searchppl]
      @avails << ava
      @restaurants << Restaurant.find(ava.restaurant_id) unless @restaurants.include?(Restaurant.find(ava.restaurant_id))
    end
  end
  render :search
end
```



Another small challenge was figuring out a way to
iterate through each restaurant/cuisine item and display its specific picture
in the background. I accomplished this by using a naming pattern to the pictures
files and using interpolation with

```
<img src={window[`${picName}`]} />
```
![alt text](https://i.imgur.com/I9vFK1n.png "Home index items")

The return value of the ajax call was restaurants with an availIds array of no
more than 5 availabilities, and no less than 1. Each restaurant in the search
page has 5 availability links (they are gray if the availability is taken).
The biggest challenge here was having the user click on a "time" of an
availability and all of the restaurant information being sent as props to show a
reservation confirmation page. I was able to accomplish this by having my search
item slice of state be a controlled component and onClick of the time, a
function that was passed down in props is dispatched called
showConfirmation(payload)

Another way to search availabilities is through the restaurant show page, with
the form on the right. A challenge for me was trying to emulate OpenTable where
clicking submit on the form makes an ajax request which populates the form with
availabilities right under the submit button. I was able to accomplish this by
having a 'searched' boolean being flipped and the form rendering the avails only
if searched === true.

![alt text](https://i.imgur.com/SISymbO.png "Pre-search-form") ![alt text](https://i.imgur.com/FxWEUbC.png "Post-search-form")

# Making reservations

Once a user clicks on a time, they are directed to the reservation confirmation
page which displays all of the relevant information. Once the user hits the
confirm button, if it is successful the confirmation message is shown. The
reservations table is a join table that joins availabilities with users, which
allows users to have_many reservations. A successful reservation changes the
avail 'taken' property to be changed from false to true.

## Still to come...
I need to work on filters on the search page, as well as a location search.
Have a loading screen or icon
