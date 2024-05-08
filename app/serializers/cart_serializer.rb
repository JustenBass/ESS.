class CartSerializer < ActiveModel::Serializer
  attributes :id, :orders, :products, :total
end
