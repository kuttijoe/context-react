import React, { useState } from 'react'
const a={
    count:1,
}
const Parent = () => {
    const [state,add]=useState(a.count);
   
  return (
    <div>
        <button onClick={()=> add(state+1)}>counter</button>
        <button onClick={()=> add(state > 0 ? state-1 : 0 )}>counter</button>
         <h2>{state}</h2>
    </div>
  )
}

export default Parent;