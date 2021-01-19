class AddIndexToLists < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :index, :integer, default: 0
    add_column :lists, :size, :integer, default: 0
  end
end
