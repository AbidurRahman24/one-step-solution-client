import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {productId} = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${productId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSingleProduct(data)
            })
    }, [])
    return (
        <div>
            <p>service destails : {productId}</p>
            <p>{singleProduct.id}</p>
            <p>Name: {singleProduct.id}</p>
            <p>Phone: {singleProduct.phone}</p>
        </div>
    );
};

export default ServicesDetails;