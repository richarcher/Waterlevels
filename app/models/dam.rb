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

  def self.import(file)
    puts "Begin import" unless Rails.env.test?
    csv = CSV.read(file, encoding: 'ISO8859-1')
    header_row = csv[2]
    header_row.each_slice(4).with_index do |dam, i|
        if (dam.length == 4)
            Dam.create(name: dam[1]) if Dam.find_by_name(dam[1]).nil?
            d = Dam.find_by_name(dam[1])
            csv.each_with_index do |row, j|
                next if j <= 5
                break if row[1] == '0.00'

                date = DateTime.strptime(row[0], '%d-%b-%y')
                height = row[(4*i) + 1] ||= 0
                storage = 0
                storage = row[(4*i) + 2].gsub(/[^0-9]/,'') unless row[(4*i) + 2].nil?
                percentage = row[(4*i) + 3] ||= 0
                next if d.levels.find_by_date(date).present?
                puts "adding #{dam[1]} : #{date}" if d.levels.find_by_date(date).nil?  unless Rails.env.test?
                d.levels.create(date: date, height: height, storage: storage, percentage: percentage)
            end
        end
    end
  end

end
