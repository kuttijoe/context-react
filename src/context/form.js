import React, { useContext, useState } from 'react'
import { StateContext } from './createcontext';
import { useNavigate } from 'react-router-dom';


let x = [];
const Form = () => {
    const { state, dispatch } = useContext(StateContext);
    console.log(state);
    const [fname, setfname] = useState(state.edit ? state.edit[0]?.name : "");
    const [desc, setdesc] = useState(state.edit ? state.edit[0]?.desc : "");
    const [empty, setempty] = useState(false);
    const Navigate = useNavigate();

    const fchange = (e) => {
        if (e.target.name == "fname") {
            setfname(e.target.value)
        }
        else {
            setdesc(e.target.value)
        }
    }

    const formsubmit = (e) => {
        e.preventDefault();
        setempty(true);
        let a = {
            name: fname,
            desc: desc,
        }
        // x.push(a);
        if (state.edit.length > 0) {
            x[state.edit[1]] = a;
            dispatch({ type: "edit", payload: [] })
        }

        else {
            x.push(a);
        }
        Navigate("/home");
    }
    return (
        <div>
            <div className='table-flex'>
            <div>
            <h1>FORM</h1>
            <form onSubmit={formsubmit}>
                <input name="fname" value={fname} onChange={fchange} placeholder='Enter the name'></input>
                <br></br>
                {fname == "" && empty && <div>enter the name</div>}
                <input name="des" value={desc} onChange={fchange} placeholder='Enter the description'></input>
                <br></br>
                {desc == "" && empty && <div>enter the description</div>}
                <button onClick={() => dispatch({ type: 'form', payload: x })}>submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Form;