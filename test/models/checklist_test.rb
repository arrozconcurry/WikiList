require "test_helper"

describe Checklist do
  let(:checklist) { Checklist.new }

  it "must be valid" do
    value(checklist).must_be :valid?
  end
end
