import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import Form from './form'
import Home from './home'
import { StateContext } from './createcontext'
import { initialstate, stateReducer } from './reducer'



const Router = () => {
    const [state,dispatch]=useReducer(stateReducer,initialstate);
  return (
    <StateContext.Provider value={{state,dispatch }}>
      <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='*' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    </StateContext.Provider>
  )
}

export default Router;