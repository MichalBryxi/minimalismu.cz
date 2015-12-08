# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Goal.create(
  name: 'Strava',
  description: 'Jídlo je dobré.',
  icon: 'fa-cutlery',
  amount: 3000,
  order: 11
)

Goal.create(
  name: 'Pobyt v rodině 1. týden',
  description: 'Ubytování',
  icon: 'fa-bed',
  amount: 3000,
  order: 12
)

Goal.create(
  name: 'Pobyt v rodině 2. týden',
  description: 'Ubytování',
  icon: 'fa-bed',
  amount: 3000,
  order: 13
)

Goal.create(
  name: 'Doprava tam',
  description: 'Autobusem od *Student Agency*.',
  icon: 'fa-bus',
  amount: 4000,
  order: 14
)

Goal.create(
  name: 'Doprava zpět',
  description: 'Autobusem od *Student Agency*.',
  icon: 'fa-bus',
  amount: 4000,
  order: 15
)

10.times do |i|
  n = i + 1
  Goal.create(
    name: "Jazykový kurz #{n}. den",
    description: "Hlavní náplň celého výletu.",
    icon: 'fa-graduation-cap',
    amount: 1400,
    order: n
  )
end
