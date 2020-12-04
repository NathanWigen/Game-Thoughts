import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function BlogEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const blogsOne = props.blogs.find(blog => blog.id === Number(id))
      setFormData({
        title: blogsOne.title,
        content: blogsOne.content
      })
    }
    if (props.blogs.length) {
      prefillForm()
    }
  },[props.blogs])

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
      props.handleUpdate(id, formData);
    }}>
    <div>
      <h3>Edit Blog</h3>
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