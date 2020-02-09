class CreateToDoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :to_do_items do |t|
      t.string :name
      t.boolean :isDone

      t.timestamps
    end
  end
end
