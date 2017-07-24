class Item
  include Mongoid::Document

  field :step, type: String
  embedded_in :checklist
end
