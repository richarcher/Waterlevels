# == Schema Information
#
# Table name: levels
#
#  id         :integer          not null, primary key
#  dam_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  date       :datetime
#  height     :decimal(, )
#  storage    :integer
#  percentage :decimal(, )
#

FactoryGirl.define do
  factory :level do
    dam nil
  end
end
