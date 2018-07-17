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
    availabilities = Avail.all.sort_by {|a| [a.datetime.hour, a.datetime.min] }
    availabilities.each do |ava|
      if (restaurant_params[:searchdate][-2..-1].to_i== ava.datetime.day &&
        restaurant_params[:searchdate][-5..-4].to_i == ava.datetime.month &&
        restaurant_params[:searchtime][0..1].to_i <= ava.datetime.hour &&

        (restaurant_params[:searchcuisine].downcase ==
          Restaurant.find(ava.restaurant_id).cuisine.downcase ||
        Restaurant.find(ava.restaurant_id).name.downcase.include?(restaurant_params[:searchcuisine])))
        @avails << ava
        @restaurants << Restaurant.find(ava.restaurant_id) unless @restaurants.include?(Restaurant.find(ava.restaurant_id))
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
