class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string "body", default: "", null: false
      t.integer "rating", null: false
      t.integer "restaurant_id", null: false
      t.integer "author_id", null: false
      t.timestamps 
    end
  end
end
