require 'rails_helper'

RSpec.describe DamsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    it "returns http success" do
      dam = FactoryGirl.create(:dam)
      get :show, params: { id: dam.id }
      expect(response).to have_http_status(:success)
    end
  end
end
