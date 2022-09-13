import React, { useEffect, useState } from 'react';

const Order = () => {
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product?email=${email}`)
  .then(response => response.json())
  .then(json => {
    setOrder(json)
  })
    },[])
    return (
        <div>
            <h1>This is order page:{order.length}</h1>
        </div>
    );
};

export default Order;