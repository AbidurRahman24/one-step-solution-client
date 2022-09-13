import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../home/service/Service';

const HomeServices = () => {
    const [card, setCard] = useState([])
    const [product, setProduct] = useServices()
    // const [product, setProduct] = useState([])
    
    // useEffect(() => {
    //     fetch('http://localhost:5000/order')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setProduct(data)
    //         })
    // }, [])
    const handleAddProudct =(product) =>{
        const newCard = [...card, product]
        setCard(newCard)
        
    }
    return (
        <>
            {
                product.map(product => <Service 
                    key={product._id} 
                    product={product}
                    handleAddProudct={handleAddProudct}
                    ></Service>)
            }
        </>
    );
};

export default HomeServices;