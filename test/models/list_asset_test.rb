# == Schema Information
#
# Table name: list_assets
#
#  id         :bigint           not null, primary key
#  list_id    :integer          not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ListAssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
