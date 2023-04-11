import React from 'react'
import Profile from './profile/profile';
import Home from './home/home';
import Login from './login/login';
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="*" element={<h1>Not Found!</h1>}></Route> */}
        <Route path="*" element={<Navigate to={"/home"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;