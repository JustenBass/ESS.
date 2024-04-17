class OrderablesController < ApplicationController

    def index
        render json: Orderable.all, status: :ok
    end

end
