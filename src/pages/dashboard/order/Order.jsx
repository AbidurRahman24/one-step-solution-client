import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    console.log(order);
    useEffect(()=>{
        const email = user.email
        fetch(`http://localhost:5000/product?email=${email}`)
  .then(response => response.json())
  .then(json => {
    setOrder(json)
  })
    },[user])
    
    return (
        <div>
              <h1>This is order page:{order.length}</h1>
              <p></p>
        </div>
    );
};

export default Order;