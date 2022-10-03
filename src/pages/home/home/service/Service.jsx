import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Service = ({handleAddProudct, product}) => {
    // console.log(product);
   const {_id, Name, image,max, description, price} = product
   
    return (
        <Col style={{margin:"10px"}} className=''>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>{description.slice(0, 99)}...</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Stock: {max}</ListGroup.Item>
        <ListGroup.Item>Price: {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>
        <Link to={`/product/${_id}`}>
                <Button onClick={() => handleAddProudct(product)} variant="secondary">Order Now</Button>
            </Link>
        </Card.Link>
      </Card.Body>
    </Card>
            
        </Col>
    );
};

export default Service;