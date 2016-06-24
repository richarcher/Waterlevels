class DamsController < ApplicationController

  def index
    dams = ENV['DAMS'].split('|')
    @dams = Dam.where( name: dams )

    respond_to do |format|
      format.html
      format.json { render json: @dams.to_json }
    end
  end

  def show
    @dam = Dam.find(params[:id])

    respond_to do |format|
      format.html
      format.json {
        render json: {
          name: @dam.name,
          levels: @dam.levels
        }.to_json
      }
    end

  end

end
