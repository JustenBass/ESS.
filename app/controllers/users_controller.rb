class UsersController < ApplicationController
 skip_before_action :authorize, only: [:create]

  # GET /users
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user, status: :ok
 end

 


    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
end
