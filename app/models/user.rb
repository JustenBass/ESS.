class User < ApplicationRecord
    has_secure_password
    has_one :cart
    after_create :assign_cart

    def assign_cart
        self.create_cart!
    end
end
