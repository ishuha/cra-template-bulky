import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

export default function UnprotectedRoutes() {
  return (<Routes>
    <Route path='/login' element={<Login/>}/>
  </Routes>)
}

// export default function UnprotectedRoutes() {
//   return (<>
//       <Route path='/login' element={<Login/>}/>
//     </>)
// }