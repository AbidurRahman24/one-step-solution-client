import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Service = ({handleAddProudct, product}) => {
    // console.log(product);
   const {_id, Name, image,max, description, price} = product
    return (
        <div>
            <h1>{Name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{max}</p>
            <img src={image} alt="" />
            <Link to={`/product/${_id}`}>
                <Button onClick={() => handleAddProudct(product)} variant="secondary">Order Now</Button>
            </Link>
        </div>
    );
};

export default Service;