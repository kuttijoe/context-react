import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../home/home';

const Login = () => {
    const location = useLocation();
    const data = location.state;
console.log(data.name);
const x=data.map((e, i) => {
    return e.name; 
})
console.log(x);

const y=data.map((e, i) => {
    return e.lname; 
})
console.log(y);


    const [firname, firstname] = useState("");
    const [lastname, password] = useState("");
    const [datas, datachange] = useState([]);
    const [empty,funempty]=useState(true);
    const first = (e) => {
        firstname(e.target.value);
    }

    //console.log(firname);
    const pass = (e) => {
        password(e.target.value);
    }

    
    
    const formSubmit = (e) => {
        e.preventDefault();
        //datachange([{ name: firname, lname: lastname }])
        // console.log(firname, lastname);
        // const x=data.map((e,i) => {
        //     if(e.name==firname){
        //         console.log("hi")
        //     }
        //});   

        // const y=localStorage.getItem('Name');
        // const z=localStorage.getItem('psw');
        funempty(!false);

        datachange([{ name: firname, passed: lastname }]);
    }
    const transfer = [
        {
            name: firname,
            lname: lastname,
        }
    ]

    return (
        <div className='formpage'>

            <form onSubmit={formSubmit}>
                <input name="fname" placeholder='Enter the name' onChange={first}></input>
                {firname==x && firname==="" && empty && <div>please correct the name</div>}
                <br></br>
                <input name="lname" type='password' placeholder='Enter the password' onChange={pass}></input>
                <br></br>

                <button className='formsub'>{firname==x && lastname==y ? <Link class="link" to={"/home"} state={transfer}>SUBMIT</Link> : <div>please correct the name & password</div>}</button>
                <br></br>
            </form>
        </div>
    )
}

export default Login;
// import React from 'react'

// const Login = () => {
//   return (
//     <div>login</div>
//   )
// }

// export default Login;