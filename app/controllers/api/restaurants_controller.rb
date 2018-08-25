class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: ['Something went wrong with creating your restaurant']
    end
  end



  def search
    @avails = []
    @restaurants = []
    Restaurant.search_true(restaurant_params[:searchcuisine]).each do |rest|
      a = Restaurant.avail_date(rest.id, restaurant_params[:searchdate], restaurant_params[:searchtime])
      a = a.sort_by{|el| el.hour}
      count = 0
      a.each do |ava|
        if count == 5
          break
        end
        @searchppl = restaurant_params[:searchppl]
        @avails << ava
        @restaurants << rest unless @restaurants.include?(rest)
        count += 1
      end
    end
    render :search
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :location,
      :cuisine, :price, :menu_url, :searchdate, :searchtime, :searchppl,
      :searchcuisine)
  end

end
