import { useState } from 'react'


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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(formData);
    }}>
    <div>
      <h3>New Blog Post</h3>
      <label>Game Title:
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