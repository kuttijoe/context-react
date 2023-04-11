import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {

  const location = useLocation();
  const data = location.state;
  console.log(data)
  const [display, isdisplay] = useState(data);
  console.log(display)

  return (
    <div className='table'>
      <table>

        <tr>
          <th>S.NO</th>
          <th>NAME</th>
          <th>PASSWORD</th>
          <th>UPDATE</th>
          <th>REMOVE</th>
        </tr>


        {display.map((e, i) => {
          return <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.name}</td>
            <td>{e.lname}</td>
            <td><button>UPDATE</button></td>
            <td><button>REMOVE</button></td>
          </tr>
        })}

      </table>
      <button class="home-btn"><Link class="link" to={"/"}>FORM PAGE</Link></button>
    </div>
  )
}

export default Home;