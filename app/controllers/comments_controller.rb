# This code is from the Rails review with Shay

class CommentsController < ApplicationController

    before_action :set_comment, only: [:show, :index]
    before_action :authorize_request, only: [:create, :update, :destroy]
  
    # GET
    def index
      @blog = Blog.find(params[:comment_id])
      @comments = @blog.comments
  
      render json: @comments
    end
  
  
    # GET
    def show
      render json: @comment
    end
  
    # POST 
    def create
      @comment = Comment.new(comment_params)
      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT
    def update
      if @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE 
    def destroy
      @comment.destroy
    end
  
    def random_blog
      @comment = Comment.all.sample
      render json: @comment
    end
    def find_all_blogs 
      @comments = Comment.all
      render json: @comments
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_comment
        @comment = Comment.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def comment_params
        params.require(:comment).permit(:title, :content, :blog_id, :user_id).merge(user_id: @current_user.id)
      end
end
