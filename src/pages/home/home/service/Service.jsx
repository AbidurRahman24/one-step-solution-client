import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const Service = ({handleAddProudct, product}) => {
   const {id, name, images, description, price} = product
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <Button onClick={()=> handleAddProudct(product)} variant="secondary">Order Now</Button>
        </div>
    );
};

export default Service;