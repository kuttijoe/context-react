import React,{useState} from 'react'

function Child (props) {
    const pass=props.Mobile;

    const [state, myFunc]=useState(pass);

let passed=pass;
    let ascending = [...passed].sort((x, y) => {
        let first = x.name.toLowerCase();
        let second = y.name.toLowerCase();

        if (first < second) {
            return -1;
        }
        else if (first > second) {
            return 1;
        }
    })

    let descending=[...ascending].reverse();

    let low=[...passed].sort((x,y) => {
      return x.price - y.price;
    })

    let high=[...low].reverse();

    let filter=[...passed].filter((e) => {
      if(e.isPurchased===true){
        return e.name;
      }
    })

  return (
    <div>
        <button onClick={() => myFunc(ascending)}>ascending</button>
        <button onClick={() => myFunc(descending)}>descending</button>
        <button onClick={() => myFunc(low)}>Low to High</button>
        <button onClick={() => myFunc(high)}>High to Low</button>
        <button onClick={() => myFunc(filter)}>Filter</button>
        {state.map((e,i) => <h2 key={i}>{e.name} : {e.price}</h2>)}
    </div>
  )
}

export default Child;