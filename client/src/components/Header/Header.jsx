import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1 className="header-title">Game Thoughts</h1>
      {
        currentUser ?
          <div className="user-container">
            <p className="user-name">{currentUser.username}</p>
            <button onClick={handleLogout} className="header-logout">Logout</button>
          </div>
          :
          <div className="header-login-parent">
            <Link to='/login' className="header-login">Login/Register</Link>
          </div>
      }
      {
        currentUser &&
        <div>
          <Link to='/blogs/create'><button className="header-post">Add New Post</button></Link>
        </div>
      }
    </div>
  )
}