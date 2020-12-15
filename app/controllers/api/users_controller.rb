class Api::UsersController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_out, only: :create
  before_action :require_logged_in, only: :update

  def create
    @user = User.new(user_params)
    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = current_user
    @user.add_funds(params[:amount].to_f)
    render :show
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :username,
      :email,
      :password,
      :gold
    )
  end
end
