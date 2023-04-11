import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const goToHome=()=>{
    navigate("/home")
  }
  return (
    <div>login<Link to={"/home"}>Go To Home</Link>
    <button onClick={() => goToHome()}>Go To Home</button>
    </div>
  )
}

export default Login;