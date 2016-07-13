class TodosController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Todo.all}
    end
  end
end
