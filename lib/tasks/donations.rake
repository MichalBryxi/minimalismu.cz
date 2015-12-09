namespace :donations do
  task reset: :environment do
    require 'nokogiri'
    require 'open-uri'
    require "i18n"

    Donation.destroy_all

    url = "https://www.fio.cz/ib2/transparent?a=2000455143&f=30.11.2015&t=10.01.2016"
    doc = Nokogiri::HTML(open(url))

    rows = doc.css("#id8 tbody tr")
    rows.each do |row|
      new_donation = {
        date: row.at_css("td:nth-of-type(1)").text,
        amount: row.at_css("td:nth-of-type(2)").text,
        amount: row.at_css("td:nth-of-type(2)").text.strip.gsub(/[CZK[[:space:]]]/, ''),
        account_name: row.at_css("td:nth-of-type(4)").text.strip,
        message: row.at_css("td:nth-of-type(5)").text.strip
      }

      has_hashtag = I18n.transliterate(new_donation[:message].downcase).include? "minimalismu"
      has_correct_amount = (new_donation[:amount].to_i == 30)
      vondrova_fix = (new_donation[:account_name] == 'VONDROVÁ LENKA')

      if has_hashtag or has_correct_amount or vondrova_fix
        puts new_donation
        Donation.create(new_donation)
      else
        puts "Message \"#{new_donation[:message]}\" is not acceptable"
      end
    end
  end

end
