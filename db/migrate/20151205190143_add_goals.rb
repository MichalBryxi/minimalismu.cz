class AddGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string "name"
      t.string "description"
      t.string "icon"
      t.decimal "amount"
      t.integer "order"
      
      t.timestamps null: false
    end
  end
end
