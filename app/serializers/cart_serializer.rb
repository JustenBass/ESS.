class CartSerializer < ActiveModel::Serializer
  attributes :id, :orderables, :total

end
