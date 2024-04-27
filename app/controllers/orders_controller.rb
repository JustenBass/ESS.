class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
    

    def index
        render json: Order.all
    end


    def create
        product = Product.find(params[:product_id])
        render json: Order.create!(order_params)
    end

    private

    def order_params
        params.permit(:product_id, :cart_id, :quantity)
    end
end
