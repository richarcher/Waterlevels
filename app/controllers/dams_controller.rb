class DamsController < ApplicationController
  def index
    @dams = Dam.all.order('name')
  end

  def show
    @dam = Dam.find(params[:id])
  end

end
