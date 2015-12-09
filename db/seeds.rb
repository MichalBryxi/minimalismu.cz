# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create([
  {
    title: 'Je celá tahle akce podvod?',
    body: 'Oblíbený dotaz. Děkujeme lidem, kteří poskytli návod, jak zvýšit věrohodnost celé akce. O podvod samozřejmě nejde a můžeme to dokázat.
1. Spojení akce #30dníMinimalismu a nadačního fondu PERFECT lze vidět přímo na webu [Perfect Worldu](http://www.perfect-world.cz/30-dni-minimalismu-uklid-si-a-prispej-na-dobrou-vec).
1. Nevybíráme peníze přímo. Veškeré finance končí buď v kasičce v kavárně Perfect World, nebo na [transparentním účtu](https://www.fio.cz/ib2/transparent?a=2000455143) nadace PERFECT.
1. [Facebookový profil](https://www.facebook.com/mistosesrdcem/?fref=ts) kavárny Perfect World čas od času zveřejní nějaký odkaz na tuto akci.
1. Nadační fond PERFECT už má za sebou [výsledky](http://www.perfect-world.cz/nase-vysledky) z minulých let.'
  },
  {
    title: 'Nemám hashtag #30dníMinimalismu ve zprávě pro příjemce',
    body: 'Klid, nic se neděje. Některé banky tenhle formát ani nedovolí. Zkuste prostě to nejbližší, co vám banka dovolí. Máme velké množství postupů, podle kterých párujeme platby na účet s touto akcí. Peníze každopádně půjdou na slibovaný účel, bez rozlišení. Hashtag jsme zavedli hlavně proto, aby se nám hezky posouval [ukazatel](/#/progress) na webu.'
  }
])

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
