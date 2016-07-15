module Api::V1
  class DamsController < ApiController

    # GET /api/v1/dams
    def index
      render json: Dam.all
    end

    # GET /api/v1/dams/:id
    def show
      render json: Level.where(:dam => params[:id]).all
    end

  end
end
