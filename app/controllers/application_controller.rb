class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :set_render_cart
    before_action :initialize_cart

    def set_render_cart
        @render_cart = true
    end

    #This will find a cart whenever we toute through pages if we do not have it
    def initialize_cart
        @cart ||= Cart.find_by(id: session[:cart_id])

        if @cart.nil?
            @cart = Cart.create
            session[:cart_id] = @cart.id
        end
    end

end
