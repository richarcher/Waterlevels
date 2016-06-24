class DamsController < ApplicationController
  def index
    dams = ['WEMMERSHOEK', 'STEENBRAS LOWER', 'STEENBRAS UPPER', 'VOËLVLEI', 'THEEWATERSKLOOF', 'BERG RIVER']
    @dams = Dam.where( name: dams )
  end

  def show
    @dam = Dam.find(params[:id])
  end

end
