class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index, :visit_count]


    def index
        session[:visit_count] ||= 0
        session[:visit_count] += 1
        @visit_count = session[:visit_count]
        render json: Product.all, status: :ok
    end


    def visit_count
        render json: @visit_count
    end

    private

    def set_visit_count
    end
end
