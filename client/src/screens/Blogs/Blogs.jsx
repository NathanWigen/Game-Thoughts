import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

export default function Blogs(props) {
  return (
    <div className="center">
      <h2 className="blogs-title">Game Blogs</h2>
      {
        props.blogs.map(blog => (
          <div key={blog.id} className="blogs-container">
            {
              blog.user_id === props.currentUser?.id && 
              <div>
                <Link to={`/blogs/${blog.id}/edit`}><button className="blog-edit">Edit</button></Link>
                <button onClick={()=> props.handleDelete(blog.id)} className="blog-delete">Delete</button>
              </div>
            }
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-content">{blog.content}</p>
            <div className="view-comments-link">
            <Link to={`/blogs/${blog.id}`} className="view-comments">View Comments</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}
