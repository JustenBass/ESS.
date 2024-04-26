class Cart < ApplicationRecord
    belongs_to :user, optional: true
    has_many :orders
    has_many :products, through: :orders


    def add_product(product_id)
        current_order = orders.find_by(product_id: product_id)
        if current_order
            current_order.quantity += 1
        else
            current_order = orders.build(product_id: product_id)
        end
        current_order
    end


    def total
        orders.to_a.sum{|order| order.total }
    end
end
