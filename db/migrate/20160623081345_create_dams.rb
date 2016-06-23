class CreateDams < ActiveRecord::Migration
  def change
    create_table :dams do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
