class Cart < ApplicationRecord
    belongs_to :user
    has_many :orders
    has_many :products, through: :orders


    def add_order_to_cart(product, quantity)
       if current_order = self.orders.find_by(product_id: product.id)
        current_order
       else
        self.orders.create!(product_id: product.id, quantity: quantity)
       end
    end



    def total
        orders.sum {|order| order.total }
    end
end
