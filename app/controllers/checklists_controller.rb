class ChecklistsController < ApplicationController
  before_action :set_checklist, only: [:show, :edit, :update, :destroy]

  def index
    # @checklists = Checklist.all
    if params[:search].blank?
      @checklists = Checklist.all
    else
      @checklists = Checklist.search(params[:search])
    end
  end

  def show
  end

  def new
    @checklist = Checklist.new
    @checklist.items.build
  end

  def edit
  end

  def create
    @checklist = Checklist.new(checklist_params)

    respond_to do |format|
      if @checklist.save
        format.html { redirect_to @checklist, notice: 'Checklist was successfully created.' }
        format.json { render :show, status: :created, location: @checklist }
      else
        format.html { render :new }
        format.json { render json: @checklist.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|

      if @checklist.update(checklist_params)
        format.html { redirect_to @checklist, notice: 'Checklist was successfully updated.' }
        format.json { render :show, status: :ok, location: @checklist }
      else
        format.html { render :edit }
        format.json { render json: @checklist.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @checklist.destroy
    respond_to do |format|
      format.html { redirect_to checklists_url, notice: 'Checklist was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_checklist
      @checklist = Checklist.find(params[:id])
    end

    def checklist_params
      params.require(:checklist).permit(:title, items_attributes: [:step])
    end
end
