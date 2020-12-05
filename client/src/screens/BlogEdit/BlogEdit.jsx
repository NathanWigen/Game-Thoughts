import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './BlogEdit.css'


export default function BlogEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const preFillForm = () => {
      const blogsOne = props.blogs.find(blog => blog.id === Number(id))
      setFormData({
        title: blogsOne.title,
        content: blogsOne.content
      })
    }
    if (props.blogs.length) {
      preFillForm()
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
    <div className="game-title-parent">
      <h3 className="edit-blog-title">Edit Blog</h3>
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
    )
  }