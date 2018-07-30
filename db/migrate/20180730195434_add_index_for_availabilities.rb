class AddIndexForAvailabilities < ActiveRecord::Migration[5.2]
  def change
    add_index :avails, :restaurant_id
  end
end
