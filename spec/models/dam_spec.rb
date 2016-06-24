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

  let(:data) { "BULK WATER STORAGE\r  \r,WEMMERSHOEK,,,,STEENBRAS LOWER,,,\r  \r  \r  \r01-Jan-12,48.23,44 621,76.1,,20.34,23 549,70.3,\r02-Jan-12,48.21,44 571,76.0,,20.31,23 460,70.0,\r" }

  describe '#import' do
    before :each do
      FactoryGirl.create(:dam, name: 'Dam #1')
      allow(File).to receive(:open).with('file', {:universal_newline=>false, :encoding=>'ISO8859-1'}).and_return(data)
      Dam.import('file')
    end

    it 'deletes all Dam records before re-importing' do
      expect( Dam.all.map{ |d| d.name } ).to_not include "Dam #1"
    end

    it 'creates new Dam records based on imported data' do
      expect( Dam.first.levels.count ).to eq 2
      expect( Dam.second.levels.count ).to eq 2
    end

    it 'creates levels based on imported data' do
      expect( Level.all.count ).to eq 4
    end

  end
end
