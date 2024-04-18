class ApplicationController < ActionController::API
  # protect_from_forgery with: :exception
  include ActionController::Cookies
  before_action :authorize, :guest_cart
  rescue_from ActiveRecord::RecordInvalid, with: :raise_invalid_exception
  rescue_from ActiveRecord::RecordNotFound, with: :raise_not_found_exception


  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: ["Please login or signup to access all of ESS. features"] }, status: :unauthorized unless @current_user
  end

  def guest_cart
    if session[:cart]
      @guest_cart = Cart.find(session[:cart])
    else
      @guest_cart = Cart.create
      session[:cart] = @guest_cart.id
    end
  end



  def raise_invalid_exception(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def raise_not_found_exception
    render json: {error: ['Not found']}, status: :not_found
  end
end
