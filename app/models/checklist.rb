class Checklist
  include Mongoid::Document

  field :title, type: String
  embeds_many :items
  accepts_nested_attributes_for :items
end
