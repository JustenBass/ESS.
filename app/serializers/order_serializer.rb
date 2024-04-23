class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :cart_id, :quantity, :product

  def img
    object.product.img
  end
end
