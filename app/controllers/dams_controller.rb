class DamsController < ApplicationController
  def index
    @dams = Dam.all
  end

  def show
    @dam = Dam.find(params[:id])
  end

end
