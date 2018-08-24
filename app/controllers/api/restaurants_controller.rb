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

  def is_date?(ava, date, time)
    restaurant_params[date][-2..-1].to_i== ava.datetime.day &&
    restaurant_params[date][-5..-4].to_i == ava.datetime.month &&
    restaurant_params[time][0..1].to_i <= ava.datetime.hour
  end

  def search
    @avails = []
    @restaurants = []
    Restaurant.search_true(restaurant_params[:searchcuisine]).each do |rest|
      a = rest.avail_date(rest.id)
      count = 0
      a.each do |ava|
        if count == 5
          break
        end
        if is_date?(ava, :searchdate, :searchtime)
          @searchppl = restaurant_params[:searchppl]
          @avails << ava
          @restaurants << rest unless @restaurants.include?(rest)
          count += 1
        end
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
