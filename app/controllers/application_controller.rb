class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, :set_cart
  rescue_from ActiveRecord::RecordInvalid, with: :raise_invalid_exception
  rescue_from ActiveRecord::RecordNotFound, with: :raise_not_found_exception


  private


  def set_cart
    if @current_user
    @cart = @current_user.cart
    session[:cart_id] = @cart.id
  end
end

def authorize
  @current_user = User.find_by(id: session[:user_id])
  render json: { error: ["Please login or signup to access all of ESS. features"] }, status: :unauthorized unless @current_user
end

  def raise_invalid_exception(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def raise_not_found_exception
    render json: {error: ['Not found']}, status: :not_found
  end
end
