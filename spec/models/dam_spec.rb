# == Schema Information
#
# Table name: dams
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Dam, type: :model do
  it { should respond_to :name }
  it { should have_many :levels }

  let(:data) {  "BULK WATER STORAGE\r"\
                "\r"\
                ",WEMMERSHOEK,,,,STEENBRAS LOWER,,,\r"\
                "\r"\
                "\r"\
                "\r"\
                "01-Jan-12,48.23,44 621,76.1,,20.34,23 549,70.3,\r"\
                "02-Jan-12,48.21,44 571,76.0,,20.31,23 460,70.0,\r"
              }

  describe '#import' do
    before :each do
      FactoryGirl.create(:dam, name: 'Dam #1')
      allow(File).to receive(:open).with('file', {universal_newline: false, encoding: 'ISO8859-1:utf-8'}).and_return(data)
      Dam.import('file')
    end

    it 'creates new Dam records based on imported data' do
      expect( Dam.find_by_name('WEMMERSHOEK').levels.count ).to eq 2
      expect( Dam.find_by_name('STEENBRAS LOWER').levels.count ).to eq 2
    end

    it 'creates levels based on imported data' do
      expect( Level.all.count ).to eq 4
    end

    it 'appends new levels to existing dams on subsequent import' do
      olddam = Dam.find_by_name('WEMMERSHOEK')
      newdata = data + "03-Jan-12,48.19,44 391,75.9,,20.28,23 298,69.7,\r"
      allow(File).to receive(:open).with('file', {universal_newline: false, encoding: 'ISO8859-1:utf-8'}).and_return(newdata)
      Dam.import('file')
      expect( Dam.find_by_name('WEMMERSHOEK') ).to eq olddam
      expect( Dam.find_by_name('WEMMERSHOEK').levels.count ).to eq 3
    end

  end
end
