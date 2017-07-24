require "test_helper"

describe ChecklistsController do
  let(:checklist) { checklists :one }

  it "gets index" do
    get checklists_url
    value(response).must_be :success?
  end

  it "gets new" do
    get new_checklist_url
    value(response).must_be :success?
  end

  it "creates checklist" do
    expect {
      post checklists_url, params: { checklist: {  } }
    }.must_change "Checklist.count"

    must_redirect_to checklist_path(Checklist.last)
  end

  it "shows checklist" do
    get checklist_url(checklist)
    value(response).must_be :success?
  end

  it "gets edit" do
    get edit_checklist_url(checklist)
    value(response).must_be :success?
  end

  it "updates checklist" do
    patch checklist_url(checklist), params: { checklist: {  } }
    must_redirect_to checklist_path(checklist)
  end

  it "destroys checklist" do
    expect {
      delete checklist_url(checklist)
    }.must_change "Checklist.count", -1

    must_redirect_to checklists_path
  end
end
