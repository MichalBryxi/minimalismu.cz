class AddGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string "name"
      t.string "description"
      t.decimal "amount"
      t.integer "order"
    end
  end
end
