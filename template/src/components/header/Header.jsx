import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';
import "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate()
  function logOut() {
    logout();
    navigate('/login')
  }
  return (<nav>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        <span style={{cursor: 'pointer'}} onClick={logOut}>LogOut</span>
      </nav>)
}
