# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  balance         :float            default(0.0), not null
#  gold            :boolean          default(FALSE), not null
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

  after_initialize :ensure_session_token

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
