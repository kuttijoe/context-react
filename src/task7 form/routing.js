import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './form/login'
import Form from './form/form'
import Home from './form/home'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='*' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default Router;