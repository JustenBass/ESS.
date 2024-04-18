class CartsController < ApplicationController
  skip_before_action :authorize, only: [:index, :set_cart, :show]
  # before_action :set_cart, only: [:show]


  def index
    render json: Cart.all
  end

  def set_cart
    @guest_cart = Cart.find(params[:id])
  end


  def show
    render json: @guest_cart, status: :ok
  end


end
