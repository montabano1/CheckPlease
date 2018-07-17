class ReservationController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: ['Something went wrong with creating your reservation']
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.destroy
      render :show
    else
      render json: ['Something went wrong with creating your reservation'], status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id)
  end

end
