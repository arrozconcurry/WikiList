class Checklist
  include Mongoid::Document

  field :title, type: String
  embeds_one :item
  accepts_nested_attributes_for :item
end
