# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

15.times do |i|
  Donation.create(
    date: (rand*10).days.ago,
    account_name: "Account #{i}",
    message: "Foo bar message of the day #30dníMinimalismu number #{i}",
    amount: i
  )
end
