# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  amount     :float            not null
#  avg_price  :float            default(0.0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Holding < ApplicationRecord
  validates :user_id, :symbol, presence: true
  validates :symbol, uniqueness: { scope: :user_id }

  belongs_to :user

  def sell(sell_amount)
    throw "Can't sell more #{symbol} than you own" if sell_amount > amount

    self.amount -= sell_amount
    if amount <= 0
      destroy!
    else
      save!
    end
  end

  def buy(buy_amount, unit_price)
    self.avg_price = (self.amount * avg_price + buy_amount * unit_price) /
                     (buy_amount + self.amount)
    self.amount += buy_amount
    save!
  end
end
