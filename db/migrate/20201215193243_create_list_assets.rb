class CreateListAssets < ActiveRecord::Migration[5.2] # rubocop:todo Style/Documentation
  def change
    create_table :list_assets do |t|
      t.integer :list_id, null: false, foreign_key: true
      t.string :symbol, null: false

      t.timestamps
    end
    add_index :list_assets, %i[list_id symbol], unique: true
  end
end
