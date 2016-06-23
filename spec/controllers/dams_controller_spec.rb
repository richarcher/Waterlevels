require 'rails_helper'

RSpec.describe DamsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "assigns @dams" do
      dam = FactoryGirl.create(:dam)
      get :index
      expect(assigns(:dams)).to eq([dam])
    end
  end

  describe "GET #show" do
    before do
      @dam = FactoryGirl.create(:dam)
    end

    it "returns http success" do
      get :show, id: @dam
      expect(response).to have_http_status(:success)
    end

    it "assigns @dam" do
      get :show, id: @dam
      expect(assigns(:dam)).to eq(@dam)
    end
  end

end
