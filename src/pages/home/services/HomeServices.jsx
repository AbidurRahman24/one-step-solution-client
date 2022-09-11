import React, { useState, useEffect } from 'react';
import Service from '../home/service/Service';

const HomeServices = () => {
    const [product, setProduct] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    const handleAddProudct =(product) =>{
        const newCard = [...card, product]
        setCard(newCard)
    }
    return (
        <>
            {
                product.map(product => <Service 
                    key={product.id} 
                    product={product}
                    handleAddProudct={handleAddProudct}
                    ></Service>)
            }
        </>
    );
};

export default HomeServices;