class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index]


    def index
        render json: Product.all, status: :ok
    end

    private

end
