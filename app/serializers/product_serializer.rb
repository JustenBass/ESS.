class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :price, :description

end
