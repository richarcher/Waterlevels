class AddLongLatToDam < ActiveRecord::Migration[5.0]
  def change
    add_column :dams, :lng, :float, {precision: 10, scale: 6}
    add_column :dams, :lat, :float, {precision: 10, scale: 6}
  end
end
