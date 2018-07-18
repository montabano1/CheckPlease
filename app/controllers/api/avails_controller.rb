class Api::AvailsController < ApplicationController

  def index
    @avails = Avail.all
  end

  def show
    @avail = Avail.find(params[:id])
  end

  def create
    @avail = Avail.new(avail_params)
    if @avail.save
      render :show
    else
      render json: ['Something went wrong with creating your avail']
    end
  end

  def update
    @avail = Avail.find(params[:id])
    if @avail[:taken] == 'false'
      @avail[:taken] = 'true'
    else
      @avail[:taken] = 'false'
    end
    if @avail.save
      render :show
    else
      render json: ['Something went wrong with changing your avail']
    end
  end

  def destroy
   @avail = Avail.find(params[:id])

   if @avail.destroy
     render :show
   else
     render json: ['Something went wrong with creating your avail'], status: 422
   end
 end
  private

  def avail_params
    params.require(:avail).permit(:restaurant_id, :datetime, :taken)
  end

end
