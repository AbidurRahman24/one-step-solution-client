import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/PrivateAxios';
import auth from '../../../firebase.init';
import SideBar from '../../shared/sidebar/SideBar';

const Order = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    console.log(order);
    const navigate = useNavigate();
    useEffect(()=>{
      const getOrders = async() =>{
        const email = user.email;
        const url = `http://localhost:5000/product?email=${email}`;
        try{
            const {data} = await axiosPrivate.get(url);
            setOrder(data);
        }
        catch(error){
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
        }
    }
    getOrders();
    },[user])
    
    return (
        <Row style={{height:'600px'}}>
        <Col sm={3}>
            <SideBar></SideBar>
        </Col>
        <Col sm={9}>
        <div>
              <h1>This is order page:{order.length}</h1>
              <p></p>
        </div>
        </Col>
      </Row>
    );
};

export default Order;