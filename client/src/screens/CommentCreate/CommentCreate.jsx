import { useState } from 'react'
import './CommentCreate.css'


export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    blog_id: props.id
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(props.id, formData);
    }}>
    <div className="comment-title-parent">
      <h3 className="create-comment-title">New Comment</h3>
      <label className="review-title">Review Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className="comment-review-title-input"  
        />
        </label>
      </div>
      <div className="comment-review-parent">
      <label className="create-comment-review">Review:
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
          className="comment-review-input"
        />
        </label>
      </div>
        <div>
        <button className="comment-create-submit">Submit</button>
        </div>  
    </form>
    )
  }