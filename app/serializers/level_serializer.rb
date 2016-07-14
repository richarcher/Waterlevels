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
ActiveModel::Serializer.config.adapter = :json

class LevelSerializer < ActiveModel::Serializer
  attributes :id, :date, :height, :storage, :percentage, :updated_at
end
