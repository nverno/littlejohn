class Api::HoldingsController < ApplicationController # rubocop:todo Style/Documentation
  before_action :require_logged_in

  def index
    @holdings = current_user.holdings
    render :index
  end
end
