# == Schema Information
#
# Table name: dams
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dam < ActiveRecord::Base
  has_many :levels, dependent: :destroy

  def self.import(file_url)
    puts "Loading and parsing raw data" unless Rails.env.test?
    uri = URI(ENV['CSV_URL'])
    response = Net::HTTP.get(uri)
    csv = CSV.parse(response, encoding: 'iso-8859-1')
    puts "Splitting data..." unless Rails.env.test?
    header_row = csv[2].to_a
    header_row.each_slice(4).with_index do |dam, i|
      if (dam.length == 4)
        damname = dam[1].to_s.force_encoding('iso-8859-1').encode('utf-8')

        included_dams = ENV['DAMS'].dup;
        included_dams.force_encoding('utf-8')
        next if included_dams.exclude? damname

        puts "Importing #{damname} levels..." unless Rails.env.test?
        Dam.create(name: damname) if Dam.find_by_name(damname).nil?
        d = Dam.find_by_name(damname)
        csv.each_with_index do |row, j|
          next if j <= 5
          break if row[1] == '0.00'

          date = DateTime.strptime(row[0], '%d-%b-%y')
          height = row[(4*i) + 1] ||= nil
          storage = 0
          storage = row[(4*i) + 2].gsub(/[^0-9]/,'') unless row[(4*i) + 2].nil?
          percentage = row[(4*i) + 3] ||= 0
          next if d.levels.find_by_date(date).present?
          puts "adding #{damname} : #{date}" if d.levels.find_by_date(date).nil?  unless Rails.env.test?
          d.levels.create(date: date, height: height, storage: storage, percentage: percentage)
        end
      end
    end
  end

end
