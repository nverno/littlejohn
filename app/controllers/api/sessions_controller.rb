class Api::SessionsController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_in, only: :destroy
  before_action :require_logged_out, only: :create

  def create
    # Find user by credentials
    @user = User.find_by_credentials(
      params[:user][:email] || params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
