import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import About from '../pages/About'
import ProtectedRoutes from './ProtectedRoutes'
import CounterPage from '../pages/Counter'

export default function RouteMap() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<CounterPage />} />
      </Route>
    </Routes>
  )
}