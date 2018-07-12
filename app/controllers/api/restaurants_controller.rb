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

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :location,
      :cuisine, :price, :menu_url)
  end

end
