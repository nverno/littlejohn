# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  price      :float            not null
#  amount     :float            not null
#  kind       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
  TYPES = %w[buy sell].freeze

  validates :user_id, :symbol, :price, :amount, :kind, presence: true
  validates :kind, inclusion: { in: TYPES }
  validates :amount, :price, numericality: true

  belongs_to :user

  # Ensure buys sells are valid
  validate do |trans|
    if trans.kind == 'sell'
      holding = trans.user.holdings.find_by(symbol: symbol)
      # puts "DBG: amount = #{amount.inspect}"
      # puts "DBG: holding.amount = #{holding.amount.inspect}"
      if holding.nil?
        errors.add(:transaction_invalid, "don't own #{symbol}")
      elsif holding.amount < amount
        errors.add(:transaction_invalid, "can't sell more #{symbol} than you own")
      end
    end
  end

  after_save :update_holdings

  def update_holdings
    holding = user.holdings.find_or_initialize_by(symbol: symbol)
    if kind == 'buy'
      holding.buy(amount, price)
    else
      holding.sell(amount)
    end
  end
end
