import React, { useState } from 'react'
import "./auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
    navigate('/login')
  }

  return (
    <main className='login-container'>
      <form onSubmit={handleLogin}>
        <h2>Register Form</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button type="submit">Login</button>
        <p>Already have an account? <Link to="/login">Login now</Link>.</p>
      </form>
    </main>
  )
}