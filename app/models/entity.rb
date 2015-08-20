class Entity < ActiveRecord::Base

  has_many :personal_infos, class_name: 'PersonalInfo'

end
