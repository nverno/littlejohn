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
end
