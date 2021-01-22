class Api::ListsController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_in, except: :index

  def index
    @lists = if params[:user]
               current_user.lists
               # User.find(params[:user_id]).lists
             else
               List.public_lists
             end
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def update
    @list = List.find(params[:id])
    # workaround rails substituting nil for [] in params...
    params[:list][:assets] ||= [] # if params[:list].has_key?(:assets)
    if @list.update(list_params)
      # XXX: when changing associations, need to hit database again?
      @list = List.find(params[:id])
      render :show
    else
      render json: @list.errors.full_messages, status: 401
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list&.destroy
    render :show
  end

  def create
    pars = list_params

    if params[:user_id]
      pars[:user_id] = params[:user_id]
    else
      pars[:public] = true
    end

    @list = List.new(pars)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 401
    end
  end

  private

  def list_params
    params.require(:list).permit(:name, :public, :user_id, :index, assets: [])
  end
end
