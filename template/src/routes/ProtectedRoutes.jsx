import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import { isLoggedIn } from '../services/auth'


export default function ProtectedRoutes() {
  if (isLoggedIn()) {
    return <>
      <Header />
      <Outlet />
    </>
  }
  return <Navigate to="/login" replace={true} />
}

