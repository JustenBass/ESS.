class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
    skip_before_action :set_cart, only:[:index, :create]

    def index
        render json: Order.all
    end


    def create
        # order = Order.create!(order_params)
        render json: Order.create!(order_params)
    end

    private

    def order_params
        params.permit(:product_id, :cart_id, :quantity)
    end
end
