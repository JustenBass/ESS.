class CartsController < ApplicationController
  skip_before_action :authorize, only: [:index]


  def index
    render json: Cart.all
  end

  
end
