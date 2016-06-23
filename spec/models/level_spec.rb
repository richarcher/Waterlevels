# == Schema Information
#
# Table name: levels
#
#  id         :integer          not null, primary key
#  dam_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Level, type: :model do
  it { should belong_to :dam }
end
