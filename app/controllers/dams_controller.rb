class DamsController < ApplicationController

  def index
    @dams = Dam.all
    render json: @dams
  end

  def show
    @dam = Dam.find(params[:id])
    render json: {
      name: @dam.name,
      levels: @dam.levels
    }
  end

end
