import React from 'react'
import Login from './login/login';
import Home from './home/home';
import Form from './form/form';
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route> 
        <Route path="*" element={<Navigate to={"/form"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;