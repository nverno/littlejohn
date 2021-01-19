# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  amount     :float            default(0.0)
#  avg_price  :float            default(0.0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class HoldingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
