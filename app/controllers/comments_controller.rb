# This code is from the Rails review with Shay

class CommentsController < ApplicationController

    before_action :set_comment, only: [:show, :update, :destroy, :create]
  
    # GET
    def index
      @user = User.find(params[:user_id])
      @comment = @user.comment
  
      render json: @comment
    end
  
  
    # GET
    def show
      render json: @comment
    end
  
    # POST 
    def create
      @comment = comment.new(comment_params)
      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT
    def update
      if @comment.update(blog_params)
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
      def blog_params
        params.require(:blog).permit(:title, :content, :author, :user_id)
      end
  end
end
