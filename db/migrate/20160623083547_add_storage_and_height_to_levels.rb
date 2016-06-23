class AddStorageAndHeightToLevels < ActiveRecord::Migration
  def change
    add_column :levels, :date, :datetime
    add_column :levels, :height, :decimal
    add_column :levels, :storage, :integer
    add_column :levels, :percentage, :decimal
  end
end
