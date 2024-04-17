class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img 
      t.string :description
      t.decimal :price, precision: 5, scale: 2

      t.timestamps
    end
  end
end
