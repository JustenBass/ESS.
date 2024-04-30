class CartsController < ApplicationController
    skip_before_action :authorize, only: [:index]
  #   before_action :set_cart, only: [:create]


  def index
    render json: Cart.all, status: :ok
  end

  def create
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    render json: @cart.add_order_to_cart(product, quantity )
  end

  def update
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    render json: @cart.update_order_cart_quantity(product, quantity)
  end


  def my_cart
    render json: @cart
  end



end
