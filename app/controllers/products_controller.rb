class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    skip_before_action :set_cart, only:[:index]

    def index
        render json: Product.all, status: :ok
    end
end
