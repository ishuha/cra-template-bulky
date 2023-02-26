import React from 'react'

import { Route, Routes, Navigate,Outlet } from 'react-router-dom'
import Home from '../pages/Home'


export default function ProtectedRoutes () {
  // <Navigate to="/login" replace={true} /> 
  const path = ['/login', '/register'].includes(window.location.pathname)
  if (false) {
    return <Navigate to="/login" replace={true} />
  }
  else if (false) {
    return <Navigate to="/" replace={true} />
  }
  else {
    return <Outlet />
  }
}

