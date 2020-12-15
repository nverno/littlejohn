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
end
