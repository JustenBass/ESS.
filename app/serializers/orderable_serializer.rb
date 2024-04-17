class OrderableSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product
end
