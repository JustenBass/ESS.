class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :cart_id, :quantity, :product, :product_img
  belongs_to :product

  def product_img
    object.product.img
  end
end
