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
  attributes :id, :name, :storage, :lng, :lat, :links, :levels, :lowest_level, :updated_at,

  def storage
    object.highest_level.storage
  end

  def lowest_level
    lowest_level = {}
    if @lowest = instance_options[:lowest_level]
      lowest_level[:date] = @lowest.date
      lowest_level[:height] = @lowest.height
      lowest_level[:percentage] = @lowest.percentage
      return lowest_level
    else
      return nil
    end
  end

  def levels
    @count = instance_options[:level_count] || 10000
    customised_levels = []
    object.levels.first(@count).each do |level|
      custom_level = {}
      custom_level[:date] = level.date
      custom_level[:height] = level.height
      custom_level[:storage] = level.storage
      custom_level[:percentage] = level.percentage
      customised_levels.push(custom_level)
    end
    customised_levels
  end

  def links
    { self: api_v1_dam_path(object) }
  end
end
