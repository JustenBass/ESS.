class CreateCarts < ActiveRecord::Migration[7.1]
  def change
    create_table :carts do |t|
      t.integer :user_id, default: nil
      t.timestamps
    end
  end
end
