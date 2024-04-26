class CartsController < ApplicationController
    skip_before_action :authorize, only: [:index]


  def index
    render json: Cart.all, status: :ok
  end

  def my_cart 
    render json: @cart
  end

end
