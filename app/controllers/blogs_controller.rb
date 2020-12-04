# This code is from the Rails review with Shay

class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET
  def index
    @blogs = Blog.all
    render json: @blogs
  end


  # GET
  def show
    @blog = Blog.find(params[:id])
    render json: @blog, include: :comments
  end

  # POST 
  def create
    @blog = Blog.new(blog_params)
    @blog.user = @current_user
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


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_params
      params.require(:blog).permit(:title, :content)
    end
end
