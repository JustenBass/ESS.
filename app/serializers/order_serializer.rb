class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :product_name, :cart_id, :cart_total, :quantity

  def product_name
    object.product.name
  end

  def cart_total
    object.cart.total
  end
end
