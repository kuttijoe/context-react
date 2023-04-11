import React from 'react'
import Child from '../task2/child'


const  mobiles = [{
    id: "001",
    name: "oneplus11",
    price: 56999,
    isPurchased: true
  },
  {
    id: "002",
    name: "Vivo Y100",
    price: 24999,
    isPurchased: false
  },
  {
    id: "003",
    name: "Redmi 10",
    price: 56999,
    isPurchased: true
  },
  {
    id: "004",
    name: "iphone 13",
    price: 62990,
    isPurchased: false
  },
  {
    id: "005",
    name: "Nokia",
    price: 12000,
    isPurchased: true
  },
  {
    id: "006",
    name: "Poco M4",
    price: 13999,
    isPurchased: true
  }]

 
const Parent = () => {  
    return (
      <div>
        <Child Mobile={mobiles}/>
      </div>
    )
}

export default Parent