class TodosController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Todo.all}
    end
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo, status: :ok
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: {success: true}, status: :ok
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
