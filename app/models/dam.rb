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
  has_many :levels

  def self.import(file)
    Dam.destroy_all
    csv = CSV.read(file, encoding: 'ISO8859-1', headers: false)
    header_row = csv[2]
    header_row.each_slice(4).with_index do |dam, i|
        if (dam.length == 4)
            d = Dam.create(name: dam[1])
            puts "Importing waterlevel data for `#{dam[1]}`..."
            csv.each_with_index do |row, j|
                next if j <= 5
                break if row[1] == '0.00'
                date = DateTime.strptime(row[0], '%d-%b-%y')
                height = row[(4*i) + 1] ||= 0
                storage = 0
                storage = row[(4*i) + 2].gsub(/[^0-9]/,'') unless row[(4*i) + 2].nil?
                percentage = row[(4*i) + 3] ||= 0

                d.levels.create(date: date, height: height, storage: storage, percentage: percentage)
            end
        end
    end
  end

end
