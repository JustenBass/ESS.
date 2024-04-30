module CurrentCart

    def set_cart
        @current_user = User.find(session[:user_id])
        @cart = @current_user.cart
        session[:cart_id] = @cart.id
    end
end