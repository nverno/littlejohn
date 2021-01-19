# == Schema Information
#
# Table name: list_assets
#
#  id         :bigint           not null, primary key
#  list_id    :integer          not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  index      :integer          default(0)
#
class ListAsset < ApplicationRecord
  validates :list_id, :symbol, presence: true
  validates :symbol, uniqueness: { scope: :list_id }

  belongs_to :list
end
