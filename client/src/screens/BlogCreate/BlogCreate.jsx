import { useState } from 'react'
import './BlogCreate.css'


export default function BlogCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
  <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(formData);
    }}>
      <div className="game-title-parent">
      <h3 className="create-blog-header">New Blog Post</h3>
      <label className="game-title">Game Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className="game-title-input"  
        />
        </label>
      </div>
      <div className="game-review-parent">
      <label className="game-review">Review:
        <textarea
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
          className="game-review-input"  
        />
        </label>
      </div>
        <div>
        <button className="blog-create-submit">Submit</button>
        </div>  
      </form>
    </div>
    )
  }