class CartsController < ApplicationController
    skip_before_action :authorize, only: [:index ]
  #   before_action :set_cart, only: [:create]


  def index
    render json: Cart.all, status: :ok
  end

  def create
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    render json: @cart.add_order_to_cart(product, quantity )
  end

  def update_cart
    order = @cart.orders.find_by(id: params[:id])
    quantity = params[:quantity]
    update_order_quantity = order.quantity + quantity
    order.update!(quantity: update_order_quantity)
    render json: @cart
  end

  def cart_total
    render json: @cart.total.to_i
  end


  def my_cart
    render json: @cart
  end



end
