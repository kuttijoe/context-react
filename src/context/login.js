import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const [inputName, setInputName] = useState("");
     const [inputPass, setInputPass] = useState("");
     const [formSubmit, setFormSubmit] = useState(false);

     const Details = [
      {
        userName: "selva",
        password: 12345
      },
      {
        userName: "kumar",
        password: 1234
      },
      {
        userName: "kutti",
        password: 12345
      },
      {
        userName: "aravind",
        password: 1234567
      },
      {
        userName: "hari",
        password: 1234
      }
    ];
    const Navigate = useNavigate();
    
    const inputHandle = (e) => {
      if (e.target.name === "name") {
        setInputName(e.target.value)
      } else {
        setInputPass(e.target.value);
      }
    }
    
    const submit = () => {
      console.log(inputName, inputPass);
      let setName = Details.find((value) => value.userName == inputName && value.password == inputPass);
      if (setName) {
        Navigate("/form");
      } else {
        alert("Error");
      }
    }
  return (
    <>
    
    <div className='table-flex'>
        <div>
        <h1>Login Page</h1>
        <form>
            <input value={inputName} name='name' onChange={inputHandle} placeholder='Name' />
            {inputName === "" && formSubmit && <p>name invalied</p>}
            <br></br>
            <input value={inputPass} name='password' onChange={inputHandle} placeholder='Password' />
            {inputPass === "" && formSubmit && <p>Password inCorrect</p>}
            <br></br>
        </form>
        <div className='form-btn'>
        <button onClick={() => submit()}>Submit</button>
        </div>
        </div>
        
    
        </div>
    </>
  )
}

export default Login;