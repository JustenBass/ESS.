class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index]



    def index
        render json: Order.all
    end

    # def create
    #     product = Product.find_by(id: params[:product_id])
    #     quantity = params[:quantity]
    #     order = Order.create!(product_id: product.id, cart_id: @cart.id, quantity: quantity)
    #     render json: order, status: :created
    # end

    # def update
    #     order = Order.find_by(id: params[:id])
    #     quantity = params[:quantity]
    #     # quantity = params[:quantity]
    #     # order = Order.find_by(product_id: product.id)

    #     updateOrderQuantity = order.quantity += quantity
    #     order.update!(quantity:  updateOrderQuantity)
    #     render json: order
    # end

    # private

    # def order_params
    #     params.permit(:product_id, :quantity, :cart_id)
    # end
end
