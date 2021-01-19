class AddIndexToListAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :list_assets, :index, :integer, default: 0
  end
end
