class PersonalInfo < ActiveRecord::Base

  belongs_to :entity, class_name: 'Entity'

end
