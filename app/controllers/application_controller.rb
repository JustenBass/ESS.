class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :raise_invalid_exception
    rescue_from ActionController::RecordNotFound, with: :raise_not_found_exception

    private

    def authorize
        @current_user = User.find_by( session[:user_id] )
        render json: { error: ["Please login to view."] }, status: :unauthorized, unless @current_user
    end

    def raise_invalid_exception(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end

      def raise_not_found_exception
        render json: {error: ['Not found']}, status: :not_found
      end
    end
end
