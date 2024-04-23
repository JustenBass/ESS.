class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :img
  has_many :orders 
end
