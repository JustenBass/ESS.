class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_many :orders
  has_many :products
end
