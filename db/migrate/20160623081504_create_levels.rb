class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.references :dam, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
