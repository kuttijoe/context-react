import React, { Component } from 'react'

class Parent extends Component {
    constructor(){
        super();
    this.state={
    mobiles : [{
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
}
    }
    
    ascending=() => {
       let asc = this.state.mobiles.sort((a,b)=>{
            let lower=a.name.toLowerCase();
            let higher=b.name.toLowerCase();
            if(lower<higher){
                return -1;
            }
            else if(higher<lower){
                return 1;
            }
        })
        this.setState({mobiles: asc})
    }
    descending=()=>{
        let asc=this.state.mobiles.reverse();
        this.setState({mobiles: asc})
    }
    low=()=>{
        let low=this.state.mobiles.sort((a,b)=>{
            return a.price-b.price;
        })
        this.setState({mobiles:low})
    }
    high=()=>{
        let low=this.state.mobiles.reverse();
        this.setState({mobiles:low})
    }
    filter=()=>{
        let filter=this.state.mobiles.filter((a,b)=> {
            if(a.isPurchased==true){
                return a.name;
            }
        })
        this.setState({mobiles:filter})
    }
    render() {
        return (
            <div>
                <button onClick={() => this.ascending()}>ascending</button>
                <button onClick={() => this.descending()}>descending</button>
                <button onClick={() => this.low()}>Low to High</button>
                <button onClick={() => this.high()}>High to Low</button>
                <button onClick={() => this.filter()}>Filter</button>
                {this.state.mobiles.map((e, i) => <h2 key={i}>{e.name} : {e.price}</h2>)}
            </div>
        )
    }
}

export default Parent;