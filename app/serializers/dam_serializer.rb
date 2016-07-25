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

  attributes :id, :name, :updated_at, :links

  has_many :levels do
    object.levels.first(1)
  end

  def links
    { self: api_v1_dam_path(object) }
  end
end
