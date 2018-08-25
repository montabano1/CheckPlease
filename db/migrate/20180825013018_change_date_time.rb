class ChangeDateTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :avails, :datetime
    add_column :avails, :year, :integer, null:false
    add_column :avails, :month, :integer, null:false
    add_column :avails, :day, :integer, null:false
    add_column :avails, :hour, :integer, null:false
    add_column :avails, :minute, :integer, null:false
  end
end
