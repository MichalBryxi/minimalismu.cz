namespace :donations do
  task drop: :environment do
    Donation.destroy_all
  end

  task download: :environment do
    require 'nokogiri'
    require 'open-uri'

    url = "https://www.fio.cz/ib2/transparent?a=2000455143"
    doc = Nokogiri::HTML(open(url))

    rows = doc.css("#id8 tbody tr")
    rows.each do |row|
      puts new_donation = {
        date: row.at_css("td:nth-of-type(1)").text,
        amount: row.at_css("td:nth-of-type(2)").text,
        account_name: row.at_css("td:nth-of-type(4)").text,
        message: row.at_css("td:nth-of-type(4)").text
      }

      Donation.create(new_donation)
    end
  end

end
