# == Schema Information
#
# Table name: levels
#
#  id         :integer          not null, primary key
#  dam_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  date       :datetime
#  height     :decimal(6, 2)
#  storage    :integer
#  percentage :decimal(4, 2)
#

require 'rails_helper'

RSpec.describe Level, type: :model do
  #columns
  it { should respond_to :date }
  it { should respond_to :height }
  it { should respond_to :storage }
  it { should respond_to :percentage }

  #associations
  it { should belong_to :dam }
end
