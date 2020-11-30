# This code is from the Rails review with Shay

class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]

  # GET
  def index
    @user = User.find(params[:user_id])
    @blogs = @user.blogs

    render json: @blogs
  end

  # GET
  def show
    render json: @blog
  end

  # POST 
  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: @blog, status: :created
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT
  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE 
  def destroy
    @blog.destroy
  end

  def random_blog
    @blog = Blog.all.sample
    render json: @blog
  end
  def find_all_blogs 
    @blogs = Blog.all
    render json: @blogs
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_params
      params.require(:blog).permit(:title, :content, :author, :user_id)
    end
end
