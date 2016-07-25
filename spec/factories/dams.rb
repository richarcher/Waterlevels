# == Schema Information
#
# Table name: dams
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :dam do
    name FFaker::Address.neighborhood

    factory :dam_with_levels do

      transient do
        levels_count 5
      end

      after(:create) do |dam, evaluator|
        create_list(:level, evaluator.levels_count, dam: dam)
      end
    end
  end
end
