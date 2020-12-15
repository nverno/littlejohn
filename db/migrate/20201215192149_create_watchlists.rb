class CreateWatchlists < ActiveRecord::Migration[5.2] # rubocop:todo Style/Documentation
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :list_id, null: false, foreign_key: true

      t.timestamps
    end

    add_index :watchlists, %i[user_id list_id], unique: true
  end
end
