module Api::V1
  class DamsController < ApiController

    # GET /api/v1/dams
    def index
      @dam = Dam.all
      render json: @dam, level_count: 1
    end

    # GET /api/v1/dams/:id
    def show
      @dam = Dam.find(params[:id])
      @lowest = @dam.levels.reorder('height ASC').first
      render json: @dam, lowest_level: @lowest
    end

  end
end
