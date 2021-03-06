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

class Level < ActiveRecord::Base
  belongs_to :dam

  default_scope { order('date DESC') }
end
