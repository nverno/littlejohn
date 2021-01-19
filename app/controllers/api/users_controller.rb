class Api::UsersController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_out, only: :create
  before_action :require_logged_in,
                only: %i[update follow index show settings unfollow]

  def index
    @user = current_user
    render :show
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

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
    if params[:amount] =~ /[-0-9.]+/
      @user.add_funds(params[:amount].to_f)
      render :show
    else
      render json: ['Invalid amount'], status: 400
    end
  end

  def follow
    @user = current_user
    if params[:list_id]
      current_user.follow(params[:list_id])
      @list = List.find(params[:list_id])
      render 'api/lists/show'
    else
      render json: ['Invalid list ID to follow'], status: 400
    end
  end

  def unfollow
    if params[:list_id]
      # puts "DBG: params[:list_id] = #{params[:list_id].inspect}"
      current_user.unfollow(params[:list_id])
      @user = current_user
      render :show                                # return updated user
    else
      render json: ['Invalid list ID to unfollow'], status: 400
    end
  end

  def settings
    @user = current_user
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: ['Uh oh something wrong with settings'], status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :username,
      :email,
      :password,
      :gold,
      :theme
    )
  end
end
