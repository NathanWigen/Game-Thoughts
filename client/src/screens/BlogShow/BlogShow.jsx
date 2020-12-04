import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneBlog } from '../../services/blogs'
import { postComment } from '../../services/comments'
import CommentCreate from '../CommentCreate/CommentCreate'

export default function BlogShow() {
  const [blog, setBlog] = useState({})
  const [comments, setComments] = useState([])
  const [commentToggle, setCommentToggle] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const getBlog = async () => {
      const blogData = await getOneBlog(id)
      setBlog(blogData)
      setComments(blogData.comments)
    }
    getBlog()
  },[])

  const handleCreate = async (id, commentData) => {
    const newComment = await postComment(Number(id), commentData)
    setComments(prevState => [...prevState, newComment])
  }

  return (
    <div>
      {
        blog && <div><h3>{blog.title}</h3> <h3>{blog.content}</h3> </div> 
      }
      <div>
        {comments &&
          comments.map(comment => (
            <div>
            <h4>{comment.title}</h4>
            <p>{comment.content}</p>
            </div>
          ))
        }
      </div>
      <div>
        <button onClick={() => {
          commentToggle ?
            setCommentToggle(false) :
          setCommentToggle(true)

        }}>Add Comment</button>
        {
          commentToggle && 
          <CommentCreate handleCreate={handleCreate} id={id}/>
        }
      </div>
    </div>
  )
}
