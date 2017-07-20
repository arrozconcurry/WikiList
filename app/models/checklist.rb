class Checklist
  include Mongoid::Document

  field :title, type: String
  embeds_many :items
  #attr_accessor :items_attributes
  accepts_nested_attributes_for :items, :allow_destroy => true
end
