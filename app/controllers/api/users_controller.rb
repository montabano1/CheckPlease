class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save!
      log_in!(@user)
      render :show
    else
      render json: ['something went wrong'], status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: ['something went wrong'], status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
