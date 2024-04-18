class OrdersController < ApplicationController
    skip_before_action :authorize, only:[ :index, :create ]

    def index
        render json: Order.all, status: :ok
    end

    def create
        render json: Order.create!(order_params), status: :created 
    end

    private

    def order_params
        params.permit( :product_id, :cart_id)
    end
end
