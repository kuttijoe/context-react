import React, { useState } from 'react'

const Myform = () => {

    const [firstinput, fchange] = useState("");
    const [secondinput, schange] = useState("");
    const [checkinput, checkchange] = useState(false);
    const [empty, funempty] = useState(false);
    const [display, isdisplay] = useState([]);


    const onchanged = (e) => {
        if (e.target.name == "first") {
            fchange(e.target.value);
        }
        else {
            schange(e.target.value);
        }
    }

    const change=()=>{
        checkchange(!checkinput)
    }

    const submitted = (e) => {
        e.preventDefault();

        funempty(true);

        isdisplay([ { first: firstinput, second: secondinput, check: checkinput } ]);
    }


    return (
        <div>
            <form onSubmit={submitted}>
                <input name="first" onChange={onchanged}></input>
                <br></br>
                {firstinput === "" && empty && <div>please fill the text</div>}
                <input name="second" onChange={onchanged}></input>
                <br></br>
                {secondinput === "" && empty && <div>please fill the text</div>}
                <input name="check" type='checkbox' onChange={change}></input>
                <br></br>
                <input type='submit'></input>
            </form>
            <div>
                {display.map((e, i) => {
                    return <div key={i}>
                        <h2>{e.first}</h2>
                        <h2>{e.second}</h2>
                        <h2>{e.check ? "true" : "false"}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Myform;