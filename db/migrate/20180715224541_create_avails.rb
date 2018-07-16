class CreateAvails < ActiveRecord::Migration[5.2]
  def change
    create_table :avails do |t|
      t.integer :restaurant_id, null:false
      t.datetime :datetime, null:false
      t.boolean :taken, null:false
    end
  end
end
