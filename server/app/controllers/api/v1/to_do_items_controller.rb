class Api::V1::ToDoItemsController < ApplicationController
  def index
    @items = ToDoItem.all

    render json: @items
  end

  private
  def to_do_item_params
    params.require(:to_do_item).permit :name, :isDone
  end
end
