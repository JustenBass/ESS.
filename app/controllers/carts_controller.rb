class CartsController < ApplicationController
  skip_before_action :authorize, only: [:index]
  def index
    render json: Cart.all
  end

  # def new
  #   @cart.new
  # end

  # def show
  #   render json: @cart, status: :ok
  # end

  # def destroy
  #   @cart.destroy if @cart.id == session[:cart_id]
  #   session[:cart_id] = nil
  # end



end
