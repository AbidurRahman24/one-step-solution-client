import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Service = ({handleAddProudct, product}) => {
   const {id, name, images, description, price} = product
    return (
        <div>
            <h1>{name}</h1>
            {/* <p>{description}</p> */}
            {/* <p>{price}</p> */}
            <Link to={`/product/${id}`}>
                <Button onClick={() => handleAddProudct(product)} variant="secondary">Order Now</Button>
            </Link>
        </div>
    );
};

export default Service;