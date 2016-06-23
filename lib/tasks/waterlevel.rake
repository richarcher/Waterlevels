namespace :waterlevel do

  desc "Imports latest saved waterlevel CSV file"
  task import: :environment do
    Dam.import(open('http://www.capetown.gov.za/en/OpenDataCatalogue/_layouts/OpenDataPortalHandler/DownloadHandler.ashx?DocumentName=Dam+levels+update+2012-2016.csv&DatasetDocument=http%3a%2f%2fcityapps.capetown.gov.za%2fsites%2fopendatacatalog%2fDocuments%2fDam%2520levels%2fDam%2520levels%2520update%25202012-2016.csv'))
  end
end