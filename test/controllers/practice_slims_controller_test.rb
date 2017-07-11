require "test_helper"

describe PracticeSlimsController do
  it "should get index" do
    get practice_slims_index_url
    value(response).must_be :success?
  end

  it "should get new" do
    get practice_slims_new_url
    value(response).must_be :success?
  end

  it "should get create" do
    get practice_slims_create_url
    value(response).must_be :success?
  end

  it "should get show" do
    get practice_slims_show_url
    value(response).must_be :success?
  end

  it "should get edit" do
    get practice_slims_edit_url
    value(response).must_be :success?
  end

  it "should get update" do
    get practice_slims_update_url
    value(response).must_be :success?
  end

  it "should get destroy" do
    get practice_slims_destroy_url
    value(response).must_be :success?
  end

end
