class CartSerializer < ActiveModel::Serializer
  attributes :id, :orders, :products, :total
  # has_many :orders
  # has_many :products, through: :orders
end
