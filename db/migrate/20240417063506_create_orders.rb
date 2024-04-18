class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.integer :cart_id
      t.integer :product_id
      t.integer :qauntity 
      t.timestamps
    end
  end
end
