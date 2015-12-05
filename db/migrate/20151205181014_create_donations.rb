class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.datetime "date"
      t.string "account_name"
      t.string "message"
      t.decimal "amount"
      
      t.timestamps null: false
    end
  end
end
