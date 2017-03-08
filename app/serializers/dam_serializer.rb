# == Schema Information
#
# Table name: dams
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

ActiveModel::Serializer.config.adapter = :json

class DamSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :lng, :lat, :storage, :links, :highest_level, :lowest_level, :levels, :updated_at,

  def storage
    object.highest_level.storage
  end

  def highest_level
    object.highest_level
  end

  def lowest_level
    object.lowest_level
  end

  def levels
    @count = instance_options[:level_count] || 100000
    customised_levels = []
    object.levels.first(@count).each do |level|
      customised_levels.push(level)
    end
    customised_levels
  end

  def links
    { self: api_v1_dam_path(object) }
  end
end
