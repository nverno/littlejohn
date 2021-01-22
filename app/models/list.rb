# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  name       :string           not null
#  public     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  index      :integer          default(0)
#  size       :integer          default(0)
#
class List < ApplicationRecord
  validates :name, presence: true
  validates :public, inclusion: { in: [true, false] }
  validates :name, uniqueness: { scope: :user_id }

  belongs_to :user, optional: true

  has_many :watchlists
  has_many :watchers,
           through: :watchlists,
           source: :user
  has_many :assets,
           foreign_key: :list_id,
           class_name: :ListAsset,
           dependent: :destroy

  def self.public_lists
    List.where(public: true)
  end

  def assets=(new_assets)
    self.size = new_assets.size
    save
    assets.destroy_all

    new_assets.each.with_index do |asset, idx|
      assets.create(symbol: asset, index: idx)
    end
  end
end
