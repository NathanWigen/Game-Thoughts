import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import BlogCreate from './screens/BlogCreate';
import BlogEdit from './screens/BlogEdit';
import Blogs from './screens/Blogs';
import Login from './screens/Login';
import Register from './screens/Register'
import BlogShow from './screens/BlogShow'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import {postBlog, getAllBlogs, destroyBlog, putBlog} from './services/blogs'



function App() {
  const [blogs, setBlogs] = useState([])


  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await getAllBlogs()
      console.log(blogData);
      setBlogs(blogData)
    }
    getBlogs()
  }, [])
  
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [history])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/blogs');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  const handleCreate = async (blogData) => {
    const newBlog = await postBlog(blogData)
    setBlogs(prevState => [...prevState, newBlog])
    history.push('/blogs')
  }

  const handleDelete = async (id) => {
    await destroyBlog(id)
    setBlogs(prevState => prevState.filter(blog=> blog.id !== id))
  }

  const handleUpdate = async (id, blogData) => {
    const updatedBlogs = await putBlog(id, blogData)
    setBlogs(prevState => prevState.map(blog => {
      return blog.id === Number(id) ? updatedBlogs : blog
    }))
    history.push('/blogs')
  }



  return (
    <div>
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          
          <Route path='/blogs/:id/edit'>
            <BlogEdit blogs={blogs} handleUpdate={handleUpdate}/>
          </Route>
          
          <Route path='/blogs/create'>
            <BlogCreate handleCreate={handleCreate}/>
          </Route>

          <Route path='/blogs/:id'>
            <BlogShow currentUser={currentUser}/>
          </Route>

          <Route path='/blogs'>
            <Blogs blogs={blogs} currentUser={currentUser} handleDelete={handleDelete}/>
          </Route>
        
          <Route path='/'>
            <Login handleLogin={handleLogin} />
          </Route> 
      
          

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
