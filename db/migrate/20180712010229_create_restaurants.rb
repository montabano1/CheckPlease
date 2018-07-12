class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :description
      t.string :location, null: false
      t.string :cuisine
      t.integer :price
      t.string :menu_url
    end
  end
end
