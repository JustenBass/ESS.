class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :price, :description
  has_many :orders 
end
