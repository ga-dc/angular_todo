class TodosController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Todo.all}
    end
  end
  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: {success: true}, status: :ok
  end
end
