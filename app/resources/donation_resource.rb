class DonationResource < JSONAPI::Resource
  attributes :date, :account_name, :message, :amount
end
