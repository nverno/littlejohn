# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  username        :string
#  balance         :float            default(0.0)
#  gold            :boolean          default(FALSE)
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :gold, inclusion: { in: [true, false] }
  validates :balance, numericality: true

  has_many :holdings, dependent: :destroy
  has_many :watchlists, dependent: :destroy
  has_many :lists, dependent: :destroy
  has_many :transactions, dependent: :destroy
  has_many :followed_lists, through: :watchlists, source: :list

  after_initialize :ensure_session_token
  after_create :create_default_watchlist
  after_create :create_default_follows

  DEFAULT_LIST = %w[AAPL TWTR TSLA NFLX FB MSFT].freeze

  def add_funds(amount)
    self.balance += amount
    save!
  end

  def following
    followed_lists.where('lists.user_id is NULL OR lists.user_id != ?', id)
  end

  def follow(list_id)
    watchlists.create!(list_id: list_id) unless watchlists.exists?(list_id: list_id)
  end

  def unfollow(list_id)
    watchlists.find_by(list_id: list_id)&.delete
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) ||
           User.find_by(email: username_or_email)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password) # rubocop:todo Naming/PredicateName
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    session_token
  end

  private

  # Start new users with default watchlist
  def create_default_watchlist
    new_list = lists.create!(name: 'My First List')
    new_list.assets = DEFAULT_LIST
  end

  # Start users following a couple of default lists
  def create_default_follows
    ['Most Popular', 'Upcoming Earnings'].each do |name|
      list = List.find_by(name: name)
      follow(list.id) if list
    end
  end

  def ensure_session_token
    generate_unique_session_token unless session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    self.session_token = new_session_token while User.find_by(session_token: session_token)
    session_token
  end
end
