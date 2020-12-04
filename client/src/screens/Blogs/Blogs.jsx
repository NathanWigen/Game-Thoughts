import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs(props) {
  return (
    <div>
      <h2>Game Blogs</h2>
      {
        props.blogs.map(blog => (
          <div key={blog.id}>
            {
              blog.user_id === props.currentUser?.id && 
              <div>
                <Link to={`/blogs/${blog.id}/edit`}><button>Edit</button></Link>
                <button onClick={()=> props.handleDelete(blog.id)}>Delete</button>
              </div>
            }
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
            <Link to={`/blogs/${blog.id}`}>View Comments</Link>
          </div>
        ))
      }
    </div>
  )
}
