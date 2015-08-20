class CreatePersonalInfos < ActiveRecord::Migration
  def change
    create_table :personal_infos do |t|
      t.string :f_name, null: false
      t.string :m_name
      t.string :l_name, null: false
      t.integer :entity_id, index: true
      t.timestamps null: false
    end
  end
end
