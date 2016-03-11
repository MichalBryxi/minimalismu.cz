namespace :donations do
  task reset: [:environment, "db:reset"] do
    require 'nokogiri'
    require 'open-uri'
    require "i18n"

    Donation.destroy_all

    now = Time.now.strftime("%d.%m.%Y")
    url = "https://www.fio.cz/ib2/transparent?a=2000455143&f=30.11.2015&t=#{now}"
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

      unified_message = I18n.transliterate(new_donation[:message].downcase)
      has_hashtag = unified_message.include? "minimal"
      has_correct_amount = (new_donation[:amount].to_i == 30)
      vondrova_fix = (new_donation[:account_name] == 'VONDROVÁ LENKA')
      has_thirty_in_message = unified_message.include? "30"

      if has_hashtag or has_correct_amount or vondrova_fix or has_thirty_in_message
        puts new_donation
        Donation.create(new_donation)
      else
        puts "Message \"#{new_donation[:message]}\" is not acceptable"
      end
    end
  end

  task dump: [:environment] do
    csv_string = CSV.generate do |csv|
      donations = Donation.group(:account_name).sum(:amount).map{|k, v| csv << [k, v.to_i]}
    end

    puts csv_string
  end

end
