require 'rails_helper'

describe "/api/v1/dams" do
  before :each do
    @dams = FactoryGirl.create_list(:dam_with_levels, 10)
    get '/api/v1/dams'
  end

  it 'responds successfully' do
    expect(response).to be_success
  end

  it 'sends a list of dams' do
    json = JSON.parse(response.body)
    expect(json['dams'].length).to eq(10)
  end

  it 'sends a link to individual dam api' do
    json =  JSON.parse(response.body)
    expect(json['dams'][0]['links']['self']).to eq( "/api/v1/dams/#{@dams[0].id}" )
  end

  it 'sends the most recent level' do
    json = JSON.parse(response.body)['dams'][0]['levels'][0].keys
    expect(json).to contain_exactly('date', 'height', 'id', 'percentage', 'storage', 'updated_at')
  end
end

describe "/api/v1/dams/:id" do
  before :each do
    dam = FactoryGirl.create(:dam)
    FactoryGirl.create_list(:level, 5, dam: dam)
    get "/api/v1/dams/#{dam.id}"
  end

  it 'responds successfully' do
    expect(response).to be_success
  end

  it 'sends a dam' do
    json = JSON.parse(response.body)
    expect(json['levels'].length).to eq(5)
  end

end
