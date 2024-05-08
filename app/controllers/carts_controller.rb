class CartsController < ApplicationController
    skip_before_action :authorize, only: [:index ]


  def index
    render json: Cart.all, status: :ok
  end

  def create
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    render json: @cart.add_order_to_cart(product, quantity), status: :created
  end

  def update_cart
    order = @cart.orders.find_by(id: params[:id])
    quantity = params[:quantity]
    update_order_quantity = order.quantity + quantity
    order.update!(quantity: update_order_quantity)
    render json: @cart, status: :ok
  end

  def update_cart_total
    render json: @cart.total, status: :ok
  end

  def cart_total
    render json: @cart.total, status: :ok
  end


  def user_cart
    render json: @cart
  end



end
