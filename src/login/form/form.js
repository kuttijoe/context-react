import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Form = () => {
    const [firname, firstname] = useState("");
    const [lastname, password] = useState("");
    // const [data, datachange] = useState([]);
    const first = (e) => {
        firstname(e.target.value);
    }
    //console.log(firname);
    const pass = (e) => {
        password(e.target.value);
    }
    //console.log(lastname);
    const formSubmit = (e) => {
        e.preventDefault();
        //datachange([{ name: firname, lname: lastname }])
        // console.log(firname, lastname);   
    }
    const transfer = [
        {
            name: firname,
            lname: lastname,
        }
    ]
    // localStorage.setItem('Name', firname);
    // localStorage.setItem('psw', lastname);
    console.log(firname, lastname);


    return (
        <div className='formpage'>
            <form onSubmit={formSubmit}>
                <input name="fname" placeholder='Enter the name' onChange={first}></input>
                <br></br>
                <input name="lname" type='password' placeholder='Enter the password' onChange={pass}></input>
                <br></br>
                <button className='formsub'><Link class="link" to={"/login"} state={transfer}>SUBMIT</Link></button>
                <br></br>
            </form>
        </div>
    )
}

export default Form;

// import React from 'react'
// import { Link,useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate=useNavigate();
//   const goToHome=()=>{
//     navigate("/home")
//   }
//   return (
//     <div>login<Link to={"/home"}>Go To Home</Link>
//     <button onClick={() => goToHome()}>Go To Home</button>
//     </div>
//   )
// }

// export default Login;