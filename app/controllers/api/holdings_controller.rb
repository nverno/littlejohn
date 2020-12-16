class Api::HoldingsController < ApplicationController
  before_action :require_logged_in
  
  def index
    @holdings = current_user.holdings
    render :index
  end
end
