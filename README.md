# README

# Welcome to CheckPlease!

My app is a clone of OpenTable.com. Its purpose is to search for restaurants
by either cuisine or availability time, and make a reservation of that time.
Each restaurant has its own show page with restaurant details, ratings and
comments.

##Live site:

https://check-please1.herokuapp.com/#/

# Searching restaurants

The home page is where you can search for restaurants. You can either use
the search form which is a controlled component or you can click on one of
the cuisine items which are listed in a scrolling box. The biggest challenge
for me on this was getting the search to work correctly, which was done in the
back end by adding a search function to my restaurants controller, and a few 
selectors using if statements. Another small challenge was figuring out a way to
iterate through each restaurant/cuisine item and display its specific picture
in the background. I accomplished this by using a naming pattern to the pictures
files and using interpolation with <img src={window[`${picName}`]} />
