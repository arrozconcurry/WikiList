class Checklist
  include Mongoid::Document

  field :title, type: String
  embeds_many :items
  accepts_nested_attributes_for :items, :allow_destroy => true

  def self.search(search)
    if search
      any_of({title: /#{search}/i})
    end
  end
end
