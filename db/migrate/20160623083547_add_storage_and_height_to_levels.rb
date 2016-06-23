class AddStorageAndHeightToLevels < ActiveRecord::Migration
  def change
    add_column :levels, :date, :datetime
    add_column :levels, :height, :decimal, precision: 6, scale: 2
    add_column :levels, :storage, :integer, precision: 10
    add_column :levels, :percentage, :decimal, precision: 4, scale: 2
  end
end
