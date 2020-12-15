class CreateTransactions < ActiveRecord::Migration[5.2] # rubocop:todo Style/Documentation
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.string :symbol, null: false
      t.float :price, null: false
      t.float :amount, null: false
      t.string :kind, null: false

      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
