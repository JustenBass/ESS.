class ProductsController < ApplicationController
skip_before_action :authorize, only: [:index, :show]

  def index
    products = Product.all
    render json: products,  status: :ok
  end

  def show
    render json: Product.find(params[:id]), status: :ok
  end

private

def product_params
  params.permit(:name, :img, :price)
end

end
