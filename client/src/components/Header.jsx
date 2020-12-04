import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>Game Thoughts</h1>
      {
        currentUser ?
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          :
          <div>
            <Link to='/login'>Login/Register</Link>
          </div>
      }
      {
        currentUser &&
        <div>
          <Link to='/blogs/create'><button>Add New Post</button></Link>
        </div>
      }
    </div>
  )
}