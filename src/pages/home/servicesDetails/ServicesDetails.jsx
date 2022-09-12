import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const ServicesDetails = () => {
    const {productId} = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${productId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSingleProduct(data)
            })
    }, [productId])
    const [info, setInfo] = useState({})
    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleSubmit = () =>{
        const order = {...user, Order: info, }  
        console.log('handle submited');
    }
    return (
        <div>
            <div>
            <p>service destails : {productId}</p>
            <p>{singleProduct.id}</p>
            <p>Name: {singleProduct.id}</p>
            <p>Phone: {singleProduct.phone}</p>
            </div>
            <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleBlur} type="email" name='email' placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name='address' placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onBlur={handleBlur} type="number" name='phone' placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onBlur={handleBlur} type="number" name='quantity' placeholder="minimum order quantity 5" />
                </Form.Group>
                <p>Price: </p>
                <Button variant="primary" type="submit">
                    Checkout Product
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default ServicesDetails;