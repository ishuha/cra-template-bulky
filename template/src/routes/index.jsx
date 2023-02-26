import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProtectedRoutes from './ProtectedRoutes'
import UnprotectedRoutes from './UnprotectedRoutes'


// export default function RouteMap() {
//   return (
//     <>
//   <Routes>
//     {/* <UnprotectedRoutes/> */}
//     <Route path='/login' element={<Login/>}/>
    
//     {/* <ProtectedRoutes/> */}
//   </Routes>
//   <ProtectedRoutes>

//     <Route path='/' element={<Home />} />
//   </ProtectedRoutes>
//   </>)
// }

// export default function RouteMap() {
//   return (
//     <>
//     <UnprotectedRoutes/>
    
//     <ProtectedRoutes>
//       <Route path='/' element={<Home />} />
//     </ProtectedRoutes>
//   </>)
// }

export default function RouteMap() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
    
      <Route path='/' element={<ProtectedRoutes/> }>
        <Route path='/' element={<Home/>}/> 
        <Route exact path='head' element={<Header/>}/>
      </Route>
    
  </Routes>)
}