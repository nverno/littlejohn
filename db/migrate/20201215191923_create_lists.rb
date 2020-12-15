class CreateLists < ActiveRecord::Migration[5.2] # rubocop:todo Style/Documentation
  def change
    create_table :lists do |t|
      t.integer :user_id, foreign_key: true
      t.string :name, null: false
      t.boolean :public, default: false, null: false

      t.timestamps
    end
    add_index :lists, :name, unique: true
    add_index :lists, %i[user_id name], unique: true
  end
end
