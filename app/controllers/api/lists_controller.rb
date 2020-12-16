class Api::ListsController < ApplicationController
  def index
    @lists = List.public_lists
    render :index
  end

  
end
