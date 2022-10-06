import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../shared/sidebar/SideBar';
import AddProduct from './addProduct/AddProduct';

const Deshboard = () => {
    return (
      <Row style={{height:'600px'}}>
        <Col sm={3}>
            <SideBar></SideBar>
        </Col>
        <Col sm={9}>
            <h1>Page comming soon</h1>
        </Col>
      </Row>
    );
};

export default Deshboard;