import React, { useContext } from 'react'
import { StateContext } from './createcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const { state: { forms }, dispatch } = useContext(StateContext);
    const Navigate=useNavigate();
    console.log(forms);

    const deleted=(i)=>{
        let x=[...forms];
        x.splice(i,1);
        dispatch({
            type:'form',
            payload:x,
        })
    }

    const edited=(value,index)=>{
        Navigate('/form')
        dispatch({
            type:"edit",
            payload:[value,index]
        })
    }


    const form=()=>{
        Navigate("/form");
    }
    const login=()=>{
        Navigate("/login")
    }
    return (
        <div>
            <div className='table-flex'>
                <div>
                    <h1>HOME</h1>
                    <table>
                        <tr>
                            <th>S.NO</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                        {forms.map((value, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.desc}</td>
                                <td><button onClick={()=>edited(value,index)}>EDIT</button></td>
                                <td><button onClick={()=>deleted(index)}>DELETE</button></td>
                            </tr>
                        })}
                    </table>
                </div>

            </div>
            <div className='form-btn'>
            <button onClick={form}>FORM</button>
          
                <button onClick={login}>LOG IN</button>
            </div>
        </div>
    )
}

export default Home;