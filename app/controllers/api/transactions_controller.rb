class Api::TransactionsController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_in

  def index
    @transactions = current_user.transactions
    render :index
  end

  def show
    @transaction = Transaction.find(params[:id])
    render :show
  end

  def create
    @transaction = current_user.transactions.new(transaction_params)
    if @transaction.save
      render :show
    else
      render json: @transaction.errors.full_messages, status: 401
    end
  end

  def buy
    @transaction = current_user.buy(
      params[:symbol],
      params[:amount].to_f,
      params[:price].to_f
    )
    render :show
  rescue Exception => e # rubocop:todo Lint/RescueException
    render json: [e], status: 400
  end

  def sell
    @transaction = current_user.sell(
      params[:symbol],
      params[:amount].to_f,
      params[:price].to_f
    )
    render :show
  rescue Exception => e # rubocop:todo Lint/RescueException
    render json: [e], status: 400
  end

  private

  def transaction_params
    params.require(:transaction).permit(
      :user_id, :symbol, :price, :amount, :kind
    )
  end
end
