class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null:false
      t.integer :avail_id, null:false
    end
  end
end
