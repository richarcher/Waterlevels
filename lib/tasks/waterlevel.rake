namespace :waterlevel do

  desc "Imports latest saved waterlevel CSV file"
  task import: :environment do
    Dam.import(ENV['CSV_URL'])
  end

  desc "Prepopulate Dams with related information"
  task seed_dams: :environment do
    dams = [
      {
        name: 'WEMMERSHOEK',
        lng: 19.093731,
        lat: -33.823745
      },
      {
        name: 'STEENBRAS LOWER',
        lng: 18.864486,
        lat: -34.183950
      },
      {
        name: 'STEENBRAS UPPER',
        lng: 18.919051,
        lat: -34.163017
      },
      {
        name: 'VOËLVLEI',
        lng: 19.044590,
        lat: -33.368873
      },
      {
        name: 'THEEWATERSKLOOF',
        lng: 19.208895,
        lat: -34.027245
      },
      {
        name: 'BERG RIVER',
        lng: 19.060770,
        lat: -33.928335
      }
    ]

    dams.each do |dam|
      @dam = Dam.find_by_name(dam[:name])
      @dam.update_attributes(dam)
    end
  end
end
