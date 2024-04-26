class CartSerializer < ActiveModel::Serializer
  attributes :id, :orders, :products, :orders
  # has_many :orders
  # has_many :products
end
