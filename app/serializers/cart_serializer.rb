class CartSerializer < ActiveModel::Serializer
  attributes :id, :products, :orders
  has_many :orders
  has_many :products
end
