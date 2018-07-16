class ChangeTakenToString < ActiveRecord::Migration[5.2]
  def change
    remove_column :avails, :taken, :boolean
    add_column :avails, :taken, :string, null: false
  end
end
