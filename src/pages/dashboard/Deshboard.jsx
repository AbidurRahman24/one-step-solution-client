import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../shared/sidebar/SideBar';
import AddProduct from './addProduct/AddProduct';
import Order from './order/Order';

const Deshboard = () => {
    return (
      <Row style={{height:'600px'}}>
        <Col sm={3}>
            <SideBar></SideBar>
        </Col>
        <Col sm={9}>
            <Order></Order>
        </Col>
      </Row>
    );
};

export default Deshboard;