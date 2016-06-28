namespace :waterlevel do

  desc "Imports latest saved waterlevel CSV file"
  task import: :environment do
    Dam.import(ENV['CSV_URL'])
  end
end
