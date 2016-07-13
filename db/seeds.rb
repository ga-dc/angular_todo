# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!([
  {title: "Learn Angular", completed: false},
  {title: "Build a todo app", completed: false},
  {title: "Mark building a todo app as complete", completed: false},
  {title: "Repeat", completed: false},
])
