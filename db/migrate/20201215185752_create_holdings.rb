class CreateHoldings < ActiveRecord::Migration[5.2] # rubocop:todo Style/Documentation
  def change
    create_table :holdings do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.string :symbol, null: false
      t.float :amount, null: false
      t.float :avg_price, default: 0

      t.timestamps
    end

    add_index :holdings, :user_id
  end
end
