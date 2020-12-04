import { useState } from 'react'


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
    <div>
      <h3>New Comment</h3>
      <label>Review Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        </label>
      </div>
      <div>
      <label>Review:
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        </label>
      </div>
        <div>
        <button>Submit</button>
        </div>  
    </form>
    )
  }