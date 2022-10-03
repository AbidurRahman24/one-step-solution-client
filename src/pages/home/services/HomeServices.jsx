import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../home/service/Service';
import './HomeServices.css'
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
    const handleAddProudct = (product) => {
        const newCard = [...card, product]
        setCard(newCard)

    }
    return (
        <>
            <div className="services-container">
                <Container >
                    <div className="services-header">
                        <h1>OUR SERVICES</h1>
                    </div>
                    <Row>
                    
                    {
                        product.map(product => <Service
                            key={product._id}
                            product={product}
                            handleAddProudct={handleAddProudct}
                        ></Service>)
                    }
                   
                    </Row>
                    </Container>
                    </div>
        </>
    );
};

export default HomeServices;