import React from 'react'
import Home from './CRUD/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CreatUsers from './CRUD/CreatUsers'
import Users from './CRUD/Users'
import EditPage from './CRUD/EditPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<CreatUsers/>} path='/'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<EditPage/>} path='/edit/:id'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App