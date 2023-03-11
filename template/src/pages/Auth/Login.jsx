import React, { useState } from 'react'
import "./auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ show:false, msg:'Email and Password both are required' }) ;
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
    if ( email === 'email@email.com' && password === 'password' ) {
      login('data')
      navigate('/')
    } else {
      setError( { show: true , msg: 'Incorrect email or password' } )
    }
    setTimeout(() => {
      setError({ show:false, msg:'Email and Password both are required' })
    }, 1500);
  }

  const {show:showError, msg:errorMessage} = error
  return (
    <main className='login-container'>
      <form onSubmit={handleLogin}>
        <h2>Login Form</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button type="submit">Login</button>
        <div className='error-message'> {showError ? '* '+errorMessage : " "} </div>
        <p>Don't have an account? <Link to="/register">Register now</Link>.</p>
      </form>
    </main>
  )
}