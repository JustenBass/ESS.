class OrderableSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_name

  def product_name
    object.product.name
  end
end
