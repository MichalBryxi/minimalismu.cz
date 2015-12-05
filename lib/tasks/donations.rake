namespace :donations do
  task reset: :environment do
    require 'nokogiri'
    require 'open-uri'
    require "i18n"

    Donation.destroy_all

    url = "https://www.fio.cz/ib2/transparent?a=2000455143"
    doc = Nokogiri::HTML(open(url))

    rows = doc.css("#id8 tbody tr")
    rows.each do |row|
      new_donation = {
        date: row.at_css("td:nth-of-type(1)").text,
        amount: row.at_css("td:nth-of-type(2)").text,
        account_name: row.at_css("td:nth-of-type(4)").text.strip,
        message: row.at_css("td:nth-of-type(5)").text.strip
      }

      has_hashtag = I18n.transliterate(new_donation[:message].downcase).include? "minimalismu"

      if has_hashtag
        puts new_donation
        Donation.create(new_donation)
      else
        puts "Message \"#{new_donation[:message]}\" is not acceptable"
      end
    end
  end

end
