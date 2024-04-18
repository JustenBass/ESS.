class ProductsController < ApplicationController
skip_before_action :authorize, only: :index

  def index
    products = Product.all
    render json: products
  end


def product_params
  params.permit(:name, :img, :price)
end



end
